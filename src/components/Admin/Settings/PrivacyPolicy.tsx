"use client";

import { MoveLeft } from "lucide-react";
import { useState } from "react";
import TextEditor from "@/components/Admin/Settings/TextEditor";

const PrivacyPolicy = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(
    `Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci. Egestas duis id nisl sed ante congue scelerisque. Eleifend facilisis aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis habitant. Imperdiet tincidunt nisl consectetur hendrerit accumsan vehicula imperdiet mattis. Neque a vitae diam pharetra duis habitasse convallis luctus pulvinar. Pharetra nunc morbi elementum nisl magnis convallis arcu enim tortor. Cursus a sed tortor enim mi imperdiet massa donec mauris. Sem morbi morbi posuere faucibus. Cras risus ultrices duis pharetra sit porttitor elementum sagittis elementum. Ut vitae blandit pulvinar fermentum in id sed. At pellentesque non semper eget egestas vulputate id volutpat quis. Dolor etiam sodales at elementum mattis nibh quam placerat ut. Suspendisse est adipiscing proin et. Leo nisi bibendum donec ac non eget euismod suscipit. At ultricies nullam ipsum tellus. Non dictum orci at tortor convallis tortor suspendisse. Ac duis senectus arcu nullam in suspendisse vitae. Tellus interdum enim lorem vel morbi lectus.`
  );

  const handleUpdate = () => {
    setIsEditing(false);
    console.log("✅ Content updated:", content);
    // You can send content to backend here
  };

  return (
    <div className="min-h-screen">
      <div className="p-4 sm:p-6 flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <MoveLeft />
          <button
            onClick={() => window.history.back()}
            className="px-2 py-2 rounded-3xl font-medium"
          >
            Setting
          </button>
        </div>

        <div>
          {isEditing ? (
            <div className="space-y-4">
              <TextEditor
                value={content}
                onChange={setContent}
                editable={true}
              />
              <div className="flex gap-2">
                <button
                  onClick={handleUpdate}
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div
                className="prose prose-sm sm:prose md:prose-lg p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

"use client"
import { MoveLeft } from "lucide-react"
import { useState } from "react"
import TextEditor from "@/components/Admin/Settings/text-editor"

const PrivacyPolicy = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(
    `Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci. Egestas duis id nisl sed ante congue scelerisque. Eleifend facilisis aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis habitant. Imperdiet tincidunt nisl consectetur hendrerit accumsan vehicula imperdiet mattis. Neque a vitae diam pharetra duis habitasse convallis luctus pulvinar. Pharetra nunc morbi elementum nisl magnis convallis arcu enim tortor. Cursus a sed tortor enim mi imperdiet massa donec mauris. Sem morbi morbi posuere faucibus. Cras risus ultrices duis pharetra sit porttitor elementum sagittis elementum. Ut vitae blandit pulvinar fermentum in id sed. At pellentesque non semper eget egestas vulputate id volutpat quis. Dolor etiam sodales at elementum mattis nibh quam placerat ut. Suspendisse est adipiscing proin et. Leo nisi bibendum donec ac non eget euismod suscipit. At ultricies nullam ipsum tellus. Non dictum orci at tortor convallis tortor suspendisse. Ac duis senectus arcu nullam in suspendisse vitae. Tellus interdum enim lorem vel morbi lectus.`
  )

  const handleUpdate = () => {
    setIsEditing(false)
    console.log("Content updated:", content)
  }

  return (
    <div className="min-h-screen">
      <div className="p-4 sm:p-6 flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <MoveLeft />
          <button onClick={() => window.history.back()} className="px-2 py-2 rounded-3xl font-medium">
            Setting
          </button>
        </div>
      </div>
      <div className="bg-white mx-5 px-10 py-20">
        <h1 className="font-medium text-[32px] mb-5">{isEditing ? "Edit Privacy Policy" : "Privacy Policy"}</h1>

        {isEditing ? (
          <TextEditor content={content} setContent={setContent} />
        ) : (
          <>
            {/* Import Quill CSS for proper display */}
            <link 
              rel="stylesheet" 
              href="https://cdn.quilljs.com/1.3.6/quill.snow.css"
            />
            
            <div 
              className="ql-editor mb-5 text-base leading-relaxed border border-gray-300 rounded-lg bg-white"
              style={{ 
                minHeight: '16rem',
                padding: '1rem',
                lineHeight: '1.75'
              }}
              dangerouslySetInnerHTML={{ __html: content }} 
            />
          </>
        )}

        <div>
          <button
            onClick={() => (isEditing ? handleUpdate() : setIsEditing(true))}
            className="w-full mt-5 bg-[#FFE135] rounded-lg text-center py-3 font-medium hover:bg-[#FFD700] transition-colors"
          >
            {isEditing ? "Update" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
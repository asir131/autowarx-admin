// components/Admin/Settings/TextEditor.tsx
"use client";

import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import FontSize from "./FontSize"; // <-- ensure this path matches your FS
import MenuEditor from "./MenuEditor";

interface TextEditorProps {
  value: string;
  onChange: (content: string) => void;
  editable?: boolean;
}

const TextEditor: React.FC<TextEditorProps> = ({ value, onChange, editable = true }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: { HTMLAttributes: { class: "list-disc ml-3" } },
        orderedList: { HTMLAttributes: { class: "list-decimal ml-3" } },
        italic: { HTMLAttributes: { class: "italic" } },
      }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      FontSize, // <-- register the extension here
    ],
    content: value,
    editable,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose md:prose-lg outline-none p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md",
      },
    },
  });

  // optional: debug list of registered extensions (run in browser console)
  useEffect(() => {
    if (!editor) return;
    // logs array of registered extension names to browser console
    // helpful to verify the extension was registered
    // eslint-disable-next-line no-console
    console.log("Registered extensions:", editor.extensionManager.extensions.map(e => e.name));
  }, [editor]);

  useEffect(() => {
    if (!editor) return;
    const handler = () => {
      const sel = editor.state.selection;
      const text = editor.state.doc.textBetween(sel.from, sel.to, " ");
      if (text.trim()) console.log("Selected text:", text);
    };
    editor.on("selectionUpdate", handler);
    return () => editor.off("selectionUpdate", handler);
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="border rounded-md">
      <MenuEditor editor={editor} />
      <EditorContent editor={editor} className="min-h-[200px]" />
    </div>
  );
};

export default TextEditor;

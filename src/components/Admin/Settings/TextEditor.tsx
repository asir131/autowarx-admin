// components/Admin/Settings/TextEditor.tsx
"use client";

import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import FontSize from "./FontSize";
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
      FontSize,
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

  // Debug extension registration
  useEffect(() => {
    if (!editor) return;
    console.log("Registered extensions:", editor.extensionManager.extensions.map(e => e.name));
  }, [editor]);

  // Fixed useEffect - always returns a cleanup function or void
  useEffect(() => {
    if (!editor) return; // Returns void when no editor
    
    const handler = () => {
      const sel = editor.state.selection;
      const text = editor.state.doc.textBetween(sel.from, sel.to, " ");
      if (text.trim()) console.log("Selected text:", text);
    };
    
    editor.on("selectionUpdate", handler);
    
    // Return cleanup function - this always runs regardless of the initial condition
    return () => {
      editor.off("selectionUpdate", handler);
    };
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
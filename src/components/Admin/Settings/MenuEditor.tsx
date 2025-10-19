// components/Admin/Settings/MenuEditor.tsx
"use client";

import React from "react";
import { Toggle } from "@/components/ui/toggle";
import { Editor } from "@tiptap/react";
import {
  Heading1,
  Heading2,
  Heading3,
  Bold,
  Italic,
  Strikethrough,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
} from "lucide-react";

const MenuEditor = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;

  const safeSetFontSize = (size: string | null) => {
    // Prefer using editor.commands.setFontSize if available
    const cmds: any = editor.commands as any;
    if (typeof cmds?.setFontSize === "function") {
      if (size) editor.commands.setFontSize(size);
      else editor.commands.unsetFontSize();
      return;
    }
    // Fallback: use chain().setMark / unsetMark directly
    if (size) {
      editor.chain().focus().setMark("fontSize", { size }).run();
    } else {
      editor.chain().focus().unsetMark("fontSize").run();
    }
  };

  const toggleFontSizeExact = (size: string) => {
    const active = editor.isActive("fontSize", { size });
    if (active) safeSetFontSize(null);
    else safeSetFontSize(size);
  };

  const options = [
    {
      icon: <Heading1 className="size-4" />,
      onClick: () => toggleFontSizeExact("2em"),
      pressed: editor.isActive("fontSize", { size: "2em" }),
      title: "H1 (selected text only)",
    },
    {
      icon: <Heading2 className="size-4" />,
      onClick: () => toggleFontSizeExact("1.5em"),
      pressed: editor.isActive("fontSize", { size: "1.5em" }),
      title: "H2 (selected text only)",
    },
    {
      icon: <Heading3 className="size-4" />,
      onClick: () => toggleFontSizeExact("1.2em"),
      pressed: editor.isActive("fontSize", { size: "1.2em" }),
      title: "H3 (selected text only)",
    },
    {
      icon: <Bold className="size-4" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      pressed: editor.isActive("bold"),
      title: "Bold",
    },
    {
      icon: <Italic className="size-4" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      pressed: editor.isActive("italic"),
      title: "Italic",
    },
    {
      icon: <Strikethrough className="size-4" />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      pressed: editor.isActive("strike"),
      title: "Strike",
    },
    {
      icon: <AlignCenter className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      pressed: editor.isActive({ textAlign: "center" }),
      title: "Center",
    },
    {
      icon: <AlignRight className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      pressed: editor.isActive({ textAlign: "right" }),
      title: "Right",
    },
    {
      icon: <List className="size-4" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      pressed: editor.isActive("bulletList"),
      title: "Bullet list",
    },
    {
      icon: <ListOrdered className="size-4" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      pressed: editor.isActive("orderedList"),
      title: "Ordered list",
    },
  ];

  return (
    <div className="border rounded-md p-1 mb-1 bg-slate-50 space-x-2 flex flex-wrap z-50">
      {options.map((opt, i) => (
        <Toggle
          key={i}
          pressed={Boolean(opt.pressed)}
          onPressedChange={opt.onClick}
          aria-label={opt.title}
          title={opt.title}
          className="mr-1"
        >
          {opt.icon}
        </Toggle>
      ))}
    </div>
  );
};

export default MenuEditor;

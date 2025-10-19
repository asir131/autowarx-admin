"use client"
import React, { useEffect, useRef } from "react"

interface TextEditorProps {
  content: string
  setContent: (content: string) => void
}

const TextEditor: React.FC<TextEditorProps> = ({ content, setContent }) => {
  const editorRef = useRef<HTMLDivElement>(null)
  const quillRef = useRef<any>(null)
  const initializedRef = useRef(false)

  useEffect(() => {
    // Dynamically import Quill to avoid SSR issues
    if (editorRef.current && !initializedRef.current) {
      initializedRef.current = true
      
      import('quill').then((QuillModule) => {
        const Quill = QuillModule.default
        
        // Register custom font sizes
        const Size: any = Quill.import('formats/size')
        Size.whitelist = ['10px', '12px', '14px', '16px', '18px', '24px', '32px', '48px']
        Quill.register(Size, true)

        if (editorRef.current && !quillRef.current) {
          quillRef.current = new Quill(editorRef.current, {
            theme: "snow",
            modules: {
              toolbar: [
                [{ size: Size.whitelist }],
                [{ color: [] }],
                ["bold", "italic", "underline", "strike"],
                [{ align: [] }],
                [{ list: "ordered" }, { list: "bullet" }],
              ],
            },
            placeholder: "Start writing...",
          })

          // Set initial content
          if (content) {
            quillRef.current.root.innerHTML = content
          }

          // Listen for changes
          quillRef.current.on("text-change", () => {
            if (quillRef.current) {
              setContent(quillRef.current.root.innerHTML)
            }
          })
        }
      })
    }
  }, [])

  // Update content when prop changes
  useEffect(() => {
    if (quillRef.current && content !== quillRef.current.root.innerHTML) {
      const selection = quillRef.current.getSelection()
      quillRef.current.root.innerHTML = content
      if (selection) {
        quillRef.current.setSelection(selection)
      }
    }
  }, [content])

  return (
    <div className="mb-5">
      <style>{`
        @import url('https://cdn.quilljs.com/1.3.6/quill.snow.css');

        .ql-toolbar {
          background-color: #FFE135 !important;
          border-radius: 0.5rem 0.5rem 0 0 !important;
          border: 2px solid #d1d5db !important;
          padding: 0.75rem !important;
        }
        
        .ql-container {
          border-radius: 0 0 0.5rem 0.5rem !important;
          border: 2px solid #d1d5db !important;
          border-top: none !important;
          min-height: 16rem !important;
          font-size: 1rem !important;
        }
        
        .ql-editor {
          min-height: 16rem !important;
          padding: 1rem !important;
          line-height: 1.75 !important;
        }
        
        .ql-toolbar button:hover,
        .ql-toolbar button.ql-active {
          background-color: #fbbf24 !important;
          border-radius: 0.25rem !important;
        }
        
        .ql-toolbar .ql-stroke {
          stroke: #374151 !important;
        }
        
        .ql-toolbar .ql-fill {
          fill: #374151 !important;
        }
        
        .ql-toolbar button:hover .ql-stroke,
        .ql-toolbar button.ql-active .ql-stroke {
          stroke: #000 !important;
        }
        
        .ql-toolbar button:hover .ql-fill,
        .ql-toolbar button.ql-active .ql-fill {
          fill: #000 !important;
        }
        
        .ql-container:focus-within {
          border-color: #FFE135 !important;
          box-shadow: 0 0 0 2px rgba(255, 225, 53, 0.2) !important;
        }
        
        .ql-editor.ql-blank::before {
          color: #9ca3af !important;
          font-style: italic !important;
        }

        /* Font size styles */
        .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="10px"]::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="10px"]::before {
          content: '10px' !important;
          font-size: 10px !important;
        }
        .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="12px"]::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="12px"]::before {
          content: '12px' !important;
          font-size: 12px !important;
        }
        .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="14px"]::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="14px"]::before {
          content: '14px' !important;
          font-size: 14px !important;
        }
        .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="16px"]::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="16px"]::before {
          content: '16px' !important;
          font-size: 16px !important;
        }
        .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="18px"]::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="18px"]::before {
          content: '18px' !important;
          font-size: 18px !important;
        }
        .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="24px"]::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="24px"]::before {
          content: '24px' !important;
          font-size: 24px !important;
        }
        .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="32px"]::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="32px"]::before {
          content: '32px' !important;
          font-size: 32px !important;
        }
        .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="48px"]::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="48px"]::before {
          content: '48px' !important;
          font-size: 48px !important;
        }

        /* Apply font sizes in editor */
        .ql-editor .ql-size-10px { font-size: 10px !important; }
        .ql-editor .ql-size-12px { font-size: 12px !important; }
        .ql-editor .ql-size-14px { font-size: 14px !important; }
        .ql-editor .ql-size-16px { font-size: 16px !important; }
        .ql-editor .ql-size-18px { font-size: 18px !important; }
        .ql-editor .ql-size-24px { font-size: 24px !important; }
        .ql-editor .ql-size-32px { font-size: 32px !important; }
        .ql-editor .ql-size-48px { font-size: 48px !important; }
      `}</style>
      
      <div ref={editorRef}></div>
    </div>
  )
}

export default TextEditor
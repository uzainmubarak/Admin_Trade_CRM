"use client"

import { useState } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Image from "@tiptap/extension-image"
import { Toggle } from "@/components/ui/toggle"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Bold, Italic, List, ListOrdered, Quote, Heading2, Undo, Redo, ImageIcon, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu"

const MenuBar = ({ editor }: { editor: any }) => {
  const [imageUrl, setImageUrl] = useState("")

  if (!editor) {
    return null
  }

  const addImage = () => {
    if (imageUrl) {
      editor.chain().focus().setImage({ src: imageUrl }).run()
      setImageUrl("")
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result
        if (typeof result === "string") {
          editor.chain().focus().setImage({ src: result }).run()
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const MainControls = () => (
    <>
      <Toggle
        size="sm"
        pressed={editor.isActive("heading")}
        onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <Heading2 className="h-4 w-4" />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-4 w-4" />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-4 w-4" />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="h-4 w-4" />
      </Toggle>
    </>
  )

  const SecondaryControls = () => (
    <>
      <Toggle
        size="sm"
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered className="h-4 w-4" />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("blockquote")}
        onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <Quote className="h-4 w-4" />
      </Toggle>

      <Toggle size="sm" onPressedChange={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
        <Undo className="h-4 w-4" />
      </Toggle>

      <Toggle size="sm" onPressedChange={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
        <Redo className="h-4 w-4" />
      </Toggle>
    </>
  )

  return (
    <div className="border-b p-2 flex flex-wrap gap-2 items-center">
      <div className="flex gap-2 items-center">
        <MainControls />
        <div className="hidden sm:flex gap-2 items-center">
          <SecondaryControls />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="sm:hidden">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <div className="flex flex-col gap-2 p-2">
              <SecondaryControls />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex-1 min-w-[200px] flex items-center space-x-2">
        <Input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="flex-1 min-w-0"
        />
        <Button size="sm" onClick={addImage} disabled={!imageUrl}>
          <ImageIcon className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline">Add Image</span>
        </Button>
      </div>

      <label htmlFor="file-upload" className="cursor-pointer">
        <Input id="file-upload" type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
        <Button size="sm" variant="outline" asChild>
          <span>
            <ImageIcon className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Upload Image</span>
          </span>
        </Button>
      </label>
    </div>
  )
}

interface RichTextEditorProps {
  id?: string
  content: string
  onUpdate: (content: string) => void
}

export function RichTextEditor({ id, content, onUpdate }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: content,
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      onUpdate(editor.getHTML())
    },
  })

  return (
    <div className="w-full border rounded-lg bg-background">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="min-h-[200px] p-4" />
    </div>
  )
}


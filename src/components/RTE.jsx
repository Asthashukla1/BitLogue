import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && (
        <label
          className="block mb-1 pl-1 font-medium text-purple-300"
          htmlFor={name}
        >
          {label}
        </label>
      )}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Editor
            id={name}
            apiKey="mf9fyxjahihnxnly9kvwa9hlu8lcbz426x9go3vwo1h4k9dw"
            initialValue={defaultValue}
            value={value}
            init={{
              height: 500,
              menubar: true,
              skin: "oxide-dark", // TinyMCE dark skin
              content_css: "dark", // content CSS for dark skin
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_style: `
                body {
                  background-color: #1e1b2d; /* dark purple/black */
                  color: #d8bfd8; /* light purple text */
                  font-family: Helvetica, Arial, sans-serif;
                  font-size: 14px;
                }
                .tox-toolbar, .tox-toolbar__primary {
                  background: #2d2750 !important; /* toolbar dark purple */
                  border-color: #4b3b7f !important;
                }
                .tox-menubar {
                  background: #2d2750 !important;
                  border-color: #4b3b7f !important;
                }
                .tox-tbtn--enabled {
                  background-color: #5c4d90 !important;
                  color: #e0c6ff !important;
                }
                .tox-statusbar {
                  background: #2d2750 !important;
                  color: #cbb7f9 !important;
                }
                .tox-toolbar__primary button:hover {
                  background-color: #6b56a0 !important;
                  color: #fff !important;
                }
              `,
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

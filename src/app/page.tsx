'use client'

import { Form } from '@/components/Form/input'
import { SettingsTabs } from '@/components/SettingsTabs/Index'
import { Mail, UploadCloud, User } from 'lucide-react'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 "
        >
          <div className="grid grid-cols-form gap-3 ">
            <label
              htmlFor="firsName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Form.Root>
                <Form.Control id="firsName" defaultValue="Leandro" />
              </Form.Root>

              <Form.Root>
                <Form.Control defaultValue="Antunes" />
              </Form.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>

            <Form.Root>
              <Form.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Form.Prefix>
              <Form.Control
                id="email"
                type="email"
                defaultValue="leandro.tune@hotmail.com"
              />
            </Form.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
                <User className=" h-8 w-8 text-violet-500" />
              </div>

              <label
                htmlFor="photo"
                className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-25"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-6 border-zinc-50 bg-zinc-100 group-hover:border-violet-50 group-hover:bg-violet-100">
                  <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600" />
                </div>

                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm">
                    <span className="font-semibold text-violet-700">
                      Click to upload{' '}
                    </span>
                    or drag and drop
                  </span>
                  <span className="text-xs">
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </span>
                </div>
              </label>
              <input type="file" className="sr-only" id="photo" />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="Role" className="text-sm font-medium text-zinc-700">
              Role
            </label>

            <Form.Root>
              <Form.Control id="role" defaultValue="Developer" />
            </Form.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="Country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>

            <div>Country</div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="Timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>

            <div>Timezone</div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="Bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <div>bio</div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="Projects"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <div>Portfolio projects</div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-5">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

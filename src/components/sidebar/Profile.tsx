import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3 py-6">
      <Image
        src="https://github.com/leandrotune.png"
        alt=""
        width={30}
        height={30}
        quality={100}
        className="h-10 w-10 rounded-full transition hover:scale-110"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Leandro Antunes
        </span>
        <span className="truncate text-sm text-zinc-500">
          leandro.tune@hotmail.com
        </span>
      </div>

      <Button variant="ghost" type="button">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}

'use client'
import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  LifeBuoy,
  Menu,
  Search,
  Settings,
  SquareStack,
  Users,
} from 'lucide-react'

import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { Form } from '../Form/input'

import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900 lg:right-auto  lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />

        <Collapsible.CollapsibleTrigger asChild className="lg:hidden">
          <Button type="button" variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.CollapsibleTrigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex min-h-screen flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Form.Root>
          <Form.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Form.Prefix>
          <Form.Control type="text" placeholder="Search" />
        </Form.Root>

        <nav className="space-y-0.5">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>

        <div className=" flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Settings} />
          </nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200">
            <Profile />
          </div>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('my details')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          title="My details"
          value="My details"
          isSelected={currentTab === 'My details'}
        />
        <TabItem
          title="Profile"
          value="Profile"
          isSelected={currentTab === 'Profile'}
        />
        <TabItem
          title="Password"
          value="Password"
          isSelected={currentTab === 'Password'}
        />
        <TabItem title="Team" value="Team" isSelected={currentTab === 'Team'} />
        <TabItem title="Plan" value="Plan" isSelected={currentTab === 'Plan'} />
        <TabItem
          title="Billing"
          value="Billing"
          isSelected={currentTab === 'Billing'}
        />
        <TabItem
          title="Email"
          value="Email"
          isSelected={currentTab === 'Email'}
        />
        <TabItem
          title="Notifications"
          value="Notifications"
          isSelected={currentTab === 'Notifications'}
        />
        <TabItem
          title="Integrations"
          value="Integrations"
          isSelected={currentTab === 'Integrations'}
        />
        <TabItem title="API" value="API" isSelected={currentTab === 'API'} />
      </Tabs.List>
    </Tabs.Root>
  )
}

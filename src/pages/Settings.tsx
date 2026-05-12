import { Md3Button, Md3Card, Md3CardContent, Md3CardDescription, Md3CardHeader, Md3CardTitle, Md3IconButton, Md3ListItem, Md3Switch } from '@/md3'
import { useMd3Theme } from '@/md3'
import { Bell, ChevronRight, Globe, HelpCircle, Info, Moon, Shield, Smartphone, Sun, Volume2, Wifi } from 'lucide-react'
import { useState } from 'react'

export default function Settings() {
  const { resolvedMode, toggleMode } = useMd3Theme()
  const [sound, setSound] = useState(true)
  const [vibrate, setVibrate] = useState(false)
  const [wifiOnly, setWifiOnly] = useState(true)
  const [autoUpdate, setAutoUpdate] = useState(true)

  return (
    <div className="pb-28 lg:pb-8">
      <div className="px-4 pt-6 pb-2">
        <h2 className="text-3xl font-normal tracking-[-0.25px] text-[var(--md3-onSurface)]">
          Settings
        </h2>
        <p className="mt-1 text-base text-[var(--md3-onSurfaceVariant)] tracking-[0.5px]">
          Customize your app experience
        </p>
      </div>

      {/* Appearance */}
      <div className="px-4 mt-4">
        <h3 className="text-sm font-medium tracking-[0.1px] text-[var(--md3-onSurface)] uppercase">
          Appearance
        </h3>
        <Md3Card variant="outlined" className="mt-3">
          <Md3CardContent className="p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {resolvedMode === 'dark' ? (
                  <Moon className="w-6 h-6 text-[var(--md3-onSurfaceVariant)]" />
                ) : (
                  <Sun className="w-6 h-6 text-[var(--md3-onSurfaceVariant)]" />
                )}
                <div>
                  <span className="text-base text-[var(--md3-onSurface)] block">Theme</span>
                  <span className="text-sm text-[var(--md3-onSurfaceVariant)]">{resolvedMode === 'dark' ? 'Dark' : 'Light'}</span>
                </div>
              </div>
              <Md3IconButton variant="filled" onClick={toggleMode}>
                {resolvedMode === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Md3IconButton>
            </div>
            <div className="h-px bg-[var(--md3-outlineVariant)]" />
            <div>
              <span className="text-base text-[var(--md3-onSurface)] block mb-2">Accent Color</span>
              <div className="flex flex-wrap gap-2">
                {['#6750A4', '#146C2E', '#6A5C16', '#7D5260', '#005FAF', '#B3261E'].map(c => (
                  <button
                    key={c}
                    className="w-10 h-10 rounded-xl border-2 border-transparent focus-visible:ring-2 focus-visible:ring-[var(--md3-primary)] transition-transform active:scale-90"
                    style={{ backgroundColor: c }}
                    onClick={() => {
                      document.documentElement.style.setProperty('--md3-primary', c)
                      document.documentElement.style.setProperty('--md3-primaryContainer', c + '22')
                      document.documentElement.style.setProperty('--md3-surfaceTint', c)
                    }}
                  />
                ))}
              </div>
            </div>
          </Md3CardContent>
        </Md3Card>
      </div>

      {/* Notifications */}
      <div className="px-4 mt-6">
        <h3 className="text-sm font-medium tracking-[0.1px] text-[var(--md3-onSurface)] uppercase">
          Notifications
        </h3>
        <Md3Card variant="outlined" className="mt-3">
          <div className="px-4 py-3 flex items-center justify-between min-h-[56px]">
            <div className="flex items-center gap-4">
              <Volume2 className="w-6 h-6 text-[var(--md3-onSurfaceVariant)]" />
              <span className="text-base text-[var(--md3-onSurface)]">Sound</span>
            </div>
            <Md3Switch checked={sound} onChange={e => setSound(e.target.checked)} />
          </div>
          <div className="mx-4 h-px bg-[var(--md3-outlineVariant)]" />
          <div className="px-4 py-3 flex items-center justify-between min-h-[56px]">
            <div className="flex items-center gap-4">
              <Smartphone className="w-6 h-6 text-[var(--md3-onSurfaceVariant)]" />
              <span className="text-base text-[var(--md3-onSurface)]">Vibration</span>
            </div>
            <Md3Switch checked={vibrate} onChange={e => setVibrate(e.target.checked)} />
          </div>
          <div className="mx-4 h-px bg-[var(--md3-outlineVariant)]" />
          <div className="px-4 py-3 flex items-center justify-between min-h-[56px]">
            <div className="flex items-center gap-4">
              <Bell className="w-6 h-6 text-[var(--md3-onSurfaceVariant)]" />
              <span className="text-base text-[var(--md3-onSurface)]">Push Notifications</span>
            </div>
            <Md3Switch checked={true} />
          </div>
        </Md3Card>
      </div>

      {/* Network */}
      <div className="px-4 mt-6">
        <h3 className="text-sm font-medium tracking-[0.1px] text-[var(--md3-onSurface)] uppercase">
          Network
        </h3>
        <Md3Card variant="outlined" className="mt-3">
          <div className="px-4 py-3 flex items-center justify-between min-h-[56px]">
            <div className="flex items-center gap-4">
              <Wifi className="w-6 h-6 text-[var(--md3-onSurfaceVariant)]" />
              <span className="text-base text-[var(--md3-onSurface)]">Wi-Fi Only Download</span>
            </div>
            <Md3Switch checked={wifiOnly} onChange={e => setWifiOnly(e.target.checked)} />
          </div>
          <div className="mx-4 h-px bg-[var(--md3-outlineVariant)]" />
          <div className="px-4 py-3 flex items-center justify-between min-h-[56px]">
            <div className="flex items-center gap-4">
              <Globe className="w-6 h-6 text-[var(--md3-onSurfaceVariant)]" />
              <span className="text-base text-[var(--md3-onSurface)]">Auto Update</span>
            </div>
            <Md3Switch checked={autoUpdate} onChange={e => setAutoUpdate(e.target.checked)} />
          </div>
        </Md3Card>
      </div>

      {/* About */}
      <div className="px-4 mt-6">
        <h3 className="text-sm font-medium tracking-[0.1px] text-[var(--md3-onSurface)] uppercase">
          About
        </h3>
        <Md3Card variant="outlined" className="mt-3">
          <Md3ListItem
            leading={<Info className="w-6 h-6" />}
            headline="Version"
            supporting="v1.0.0 (Build 20240512)"
          />
          <div className="mx-4 h-px bg-[var(--md3-outlineVariant)]" />
          <Md3ListItem
            leading={<Shield className="w-6 h-6" />}
            headline="Privacy Policy"
            trailing={<ChevronRight className="w-5 h-5" />}
          />
          <div className="mx-4 h-px bg-[var(--md3-outlineVariant)]" />
          <Md3ListItem
            leading={<HelpCircle className="w-6 h-6" />}
            headline="Terms of Service"
            trailing={<ChevronRight className="w-5 h-5" />}
          />
        </Md3Card>
      </div>

      {/* Danger zone */}
      <div className="px-4 mt-6 mb-6">
        <Md3Card variant="outlined" className="border-[var(--md3-error)]/30">
          <Md3CardHeader>
            <Md3CardTitle className="text-[var(--md3-error)]">Danger Zone</Md3CardTitle>
            <Md3CardDescription>
              These actions are irreversible. Proceed with caution.
            </Md3CardDescription>
          </Md3CardHeader>
          <Md3CardContent className="flex flex-col gap-3">
            <Md3Button variant="outlined" className="w-full border-[var(--md3-error)] text-[var(--md3-error)] hover:bg-[var(--md3-error)]/5">
              Clear Cache Data
            </Md3Button>
            <Md3Button variant="outlined" className="w-full border-[var(--md3-error)] text-[var(--md3-error)] hover:bg-[var(--md3-error)]/5">
              Delete Account
            </Md3Button>
          </Md3CardContent>
        </Md3Card>
      </div>
    </div>
  )
}

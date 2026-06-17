import React, { useEffect, useState } from 'react'
import { Typography } from './typography/typography'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Switch } from './ui/switch'
import { Textarea } from './ui/textarea'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"
import {
    SaveIcon,
    RotateCcwIcon,
} from 'lucide-react'

interface SettingField {
    name: string
    type: 'text' | 'number' | 'boolean' | 'select' | 'textarea' | 'email' | 'url' | 'para'
    value: any
    options?: string[]
    placeholder?: string
    description?: string
}

interface ToolSettingsRendererProps {
    toolName: string
    toolIcon: string
    settings: Record<string, string>
    settingsSchema: Record<string, SettingField>
    onSave: (settings: Record<string, SettingField>) => void
    onNameSave?: (name: string) => void
    onReset: () => void
}

export default function ToolSettingsRenderer({
    toolName,
    toolIcon,
    settings,
    settingsSchema,
    onSave,
    onReset
}: ToolSettingsRendererProps) {
    useEffect(()=>{
        console.log("settingsSchema", settingsSchema);
        console.log("settings", settings);
    })
    const [localSettings, setLocalSettings] = useState(settingsSchema)

    const updateSettingValue = (key: string, newValue: any) => {
        setLocalSettings(prev => {
            settings[key] = newValue;
            return {
            ...prev,
            [key]: {
                ...prev[key],
                value: newValue
            }
        }})
    }

    const handleSave = () => {
        onSave(localSettings)
    }

    const handleReset = () => {
        setLocalSettings(settingsSchema)
        onReset()
    }

    const renderSettingField = (key: string, setting: SettingField) => {
        const { type, value, options, placeholder, description } = setting
        let actualValue = settings[key] ? settings[key] : setting.value
        switch (type) {
            case 'text':
            case 'email':
            case 'url':
            
                return (
                    <div key={key} className="space-y-2">
                        <Label htmlFor={key} className="text-sm font-medium">
                            {setting.name}
                        </Label>
                        {description && (
                            <Typography variant="caption" color="muted">
                                {description}
                            </Typography>
                        )}
                        <Input
                            id={key}
                            type={type}
                            value={actualValue || ''}
                            placeholder={placeholder}
                            onChange={(e) => updateSettingValue(key, e.target.value)}
                            className="w-full"
                        />
                    </div>
                )

            case 'para':
                return (
                    <div key={key} className="space-y-2">
                        <Label htmlFor={key} className="text-sm font-medium">
                            {setting.name}
                        </Label>
                        {description && (
                            <Typography variant="caption" color="muted">
                                {description}
                            </Typography>
                        )}
                        <Textarea
                            id={key}
                            value={actualValue || ''}
                            placeholder={placeholder}
                            onChange={(e) => updateSettingValue(key, e.target.value)}
                            className="w-full"
                        />
                    </div>
                )

            case 'number':
                return (
                    <div key={key} className="space-y-2">
                        <Label htmlFor={key} className="text-sm font-medium">
                            {setting.name}
                        </Label>
                        {description && (
                            <Typography variant="caption" color="muted">
                                {description}
                            </Typography>
                        )}
                        <Input
                            id={key}
                            type="number"
                            value={actualValue || 0}
                            placeholder={placeholder}
                            onChange={(e) => updateSettingValue(key, parseFloat(e.target.value) || 0)}
                            className="w-full"
                        />
                    </div>
                )

            case 'boolean':
                return (
                    <div key={key} className="space-y-2">
                        <div className="flex items-center justify-between">
                            <div>
                                <Label htmlFor={key} className="text-sm font-medium">
                                    {setting.name}
                                </Label>
                                {description && (
                                    <Typography variant="caption" color="muted" className="block mt-1">
                                        {description}
                                    </Typography>
                                )}
                            </div>
                            <Switch
                                id={key}
                                checked={actualValue || false}
                                onCheckedChange={(checked) => updateSettingValue(key, checked)}
                            />
                        </div>
                    </div>
                )

            case 'select':
                return (
                    <div key={key} className="space-y-2">
                        <Label htmlFor={key} className="text-sm font-medium">
                            {setting.name}
                        </Label>
                        {description && (
                            <Typography variant="caption" color="muted">
                                {description}
                            </Typography>
                        )}
                        <Select
                            value={actualValue || (options?.[0] || '')}
                            onValueChange={(newValue) => updateSettingValue(key, newValue)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder={placeholder || 'Select an option'} />
                            </SelectTrigger>
                            <SelectContent>
                                {options?.map((option) => (
                                    <SelectItem key={option} value={option}>
                                        {option}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                )

            case 'textarea':
                return (
                    <div key={key} className="space-y-2">
                        <Label htmlFor={key} className="text-sm font-medium">
                            {setting.name}
                        </Label>
                        {description && (
                            <Typography variant="caption" color="muted">
                                {description}
                            </Typography>
                        )}
                        <Textarea
                            id={key}
                            value={actualValue || ''}
                            placeholder={placeholder}
                            onChange={(e) => updateSettingValue(key, e.target.value)}
                            className="w-full min-h-[80px]"
                        />
                    </div>
                )

            default:
                return (
                    <div key={key} className="space-y-2">
                        <Label className="text-sm font-medium">{setting.name}</Label>
                        <Typography variant="caption" color="muted">
                            Unsupported field type: {type}
                        </Typography>
                    </div>
                )
        }
    }

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-6 border-b">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">{toolIcon}</span>
                    <Typography variant="h6" weight="semibold">
                        {toolName} Settings
                    </Typography>
                </div>
            </div>
       

            {/* Settings Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* {JSON.stringify(settings)} */}
                {Object.keys(settings).length > 0 ? (
                    Object.entries(localSettings).map(([key, setting]) =>
                        renderSettingField(key, setting)
                    )
                ) : (
                    <div className="text-center py-8">
                        <Typography variant="bodySmall" className="text-muted-foreground">
                            No settings available for this tool.
                        </Typography>
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t flex gap-2">
                <Button
                    variant="outline"
                    onClick={handleReset}
                    className="flex-1"
                >
                    <RotateCcwIcon className="h-4 w-4 mr-2" />
                    Reset
                </Button>
                <Button
                    onClick={handleSave}
                    className="flex-1"
                >
                    <SaveIcon className="h-4 w-4 mr-2" />
                    Save
                </Button>
            </div>
        </div>
    )
}
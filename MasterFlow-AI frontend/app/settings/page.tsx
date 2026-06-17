"use client"

import React, { useState } from 'react'
import { Typography } from '@/components/typography/typography'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
    UserIcon,
    BellIcon,
    ShieldIcon,
    CreditCardIcon,
    KeyIcon,
    DatabaseIcon,
    LogOutIcon,
    TrashIcon,
    EyeIcon,
    EyeOffIcon,
    UploadIcon,
    SaveIcon,
    AlertTriangleIcon,
    CheckIcon,
    XIcon,
    SettingsIcon,
    GlobeIcon,
    MoonIcon,
    SunIcon,
    MonitorIcon,
    MailIcon,
    SmartphoneIcon,
    DownloadIcon
} from 'lucide-react'

export default function Settings() {
    const [showPassword, setShowPassword] = useState(false)
    const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [profileData, setProfileData] = useState({
        firstName: "Rishabh",
        lastName: "Patel",
        email: "rishabh@example.com",
        bio: "Workflow automation enthusiast and data analyst",
        company: "TechFlow Inc.",
        website: "https://rishabhpatel.dev",
        location: "San Francisco, CA",
        timezone: "America/Los_Angeles"
    })

    const [notifications, setNotifications] = useState({
        emailNotifications: true,
        pushNotifications: false,
        workflowUpdates: true,
        marketingEmails: false,
        securityAlerts: true,
        weeklyDigest: true
    })

    const [security, setSecurity] = useState({
        twoFactorEnabled: false,
        sessionTimeout: "30",
        loginAlerts: true
    })

    const [preferences, setPreferences] = useState({
        theme: "system",
        language: "en",
        dateFormat: "MM/dd/yyyy",
        timeFormat: "12h",
        defaultWorkflowPrivacy: "private"
    })

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <Typography variant="h3" weight="medium" className="mb-2">
                        Settings
                    </Typography>
                    <Typography variant="muted" className="text-base">
                        Manage your account settings and preferences
                    </Typography>
                </div>
            </div>

            <Tabs defaultValue="profile" className="space-y-6">
                <TabsList className="grid w-full grid-cols-6">
                    <TabsTrigger value="profile" className="flex items-center gap-2">
                        <UserIcon className="h-4 w-4" />
                        Profile
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="flex items-center gap-2">
                        <BellIcon className="h-4 w-4" />
                        Notifications
                    </TabsTrigger>
                    <TabsTrigger value="security" className="flex items-center gap-2">
                        <ShieldIcon className="h-4 w-4" />
                        Security
                    </TabsTrigger>
                    <TabsTrigger value="billing" className="flex items-center gap-2">
                        <CreditCardIcon className="h-4 w-4" />
                        Billing
                    </TabsTrigger>
                    <TabsTrigger value="preferences" className="flex items-center gap-2">
                        <SettingsIcon className="h-4 w-4" />
                        Preferences
                    </TabsTrigger>
                    <TabsTrigger value="advanced" className="flex items-center gap-2">
                        <DatabaseIcon className="h-4 w-4" />
                        Advanced
                    </TabsTrigger>
                </TabsList>

                {/* Profile Settings */}
                <TabsContent value="profile" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Profile Information</CardTitle>
                            <CardDescription>
                                Update your personal information and profile settings
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Profile Picture */}
                            <div className="flex items-center gap-6">
                                <Avatar className="w-24 h-24">
                                    <AvatarImage src="/avatars/user.jpg" />
                                    <AvatarFallback className="text-xl">RP</AvatarFallback>
                                </Avatar>
                                <div className="space-y-2">
                                    <Button variant="outline" size="sm">
                                        <UploadIcon className="h-4 w-4 mr-2" />
                                        Change Photo
                                    </Button>
                                    <Button variant="ghost" size="sm" className="text-destructive">
                                        Remove Photo
                                    </Button>
                                </div>
                            </div>

                            {/* Personal Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input
                                        id="firstName"
                                        value={profileData.firstName}
                                        onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input
                                        id="lastName"
                                        value={profileData.lastName}
                                        onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={profileData.email}
                                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="bio">Bio</Label>
                                <Textarea
                                    id="bio"
                                    placeholder="Tell us about yourself..."
                                    value={profileData.bio}
                                    onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="company">Company</Label>
                                    <Input
                                        id="company"
                                        value={profileData.company}
                                        onChange={(e) => setProfileData({ ...profileData, company: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="website">Website</Label>
                                    <Input
                                        id="website"
                                        type="url"
                                        value={profileData.website}
                                        onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="location">Location</Label>
                                    <Input
                                        id="location"
                                        value={profileData.location}
                                        onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="timezone">Timezone</Label>
                                    <Select value={profileData.timezone} onValueChange={(value) => setProfileData({ ...profileData, timezone: value })}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                                            <SelectItem value="America/Denver">Mountain Time</SelectItem>
                                            <SelectItem value="America/Chicago">Central Time</SelectItem>
                                            <SelectItem value="America/New_York">Eastern Time</SelectItem>
                                            <SelectItem value="Europe/London">GMT</SelectItem>
                                            <SelectItem value="Europe/Paris">CET</SelectItem>
                                            <SelectItem value="Asia/Tokyo">JST</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <Button>
                                    <SaveIcon className="h-4 w-4 mr-2" />
                                    Save Changes
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Notifications */}
                <TabsContent value="notifications" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Notification Preferences</CardTitle>
                            <CardDescription>
                                Choose how you want to be notified about account activity
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <Typography variant="bodySmall" weight="medium">Email Notifications</Typography>
                                        <Typography variant="caption" color="muted">Receive notifications via email</Typography>
                                    </div>
                                    <Switch
                                        checked={notifications.emailNotifications}
                                        onCheckedChange={(checked) => setNotifications({ ...notifications, emailNotifications: checked })}
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <Typography variant="bodySmall" weight="medium">Push Notifications</Typography>
                                        <Typography variant="caption" color="muted">Receive push notifications in your browser</Typography>
                                    </div>
                                    <Switch
                                        checked={notifications.pushNotifications}
                                        onCheckedChange={(checked) => setNotifications({ ...notifications, pushNotifications: checked })}
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <Typography variant="bodySmall" weight="medium">Workflow Updates</Typography>
                                        <Typography variant="caption" color="muted">Get notified when your workflows complete or fail</Typography>
                                    </div>
                                    <Switch
                                        checked={notifications.workflowUpdates}
                                        onCheckedChange={(checked) => setNotifications({ ...notifications, workflowUpdates: checked })}
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <Typography variant="bodySmall" weight="medium">Security Alerts</Typography>
                                        <Typography variant="caption" color="muted">Important security notifications</Typography>
                                    </div>
                                    <Switch
                                        checked={notifications.securityAlerts}
                                        onCheckedChange={(checked) => setNotifications({ ...notifications, securityAlerts: checked })}
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <Typography variant="bodySmall" weight="medium">Marketing Emails</Typography>
                                        <Typography variant="caption" color="muted">Product updates, tips, and promotional content</Typography>
                                    </div>
                                    <Switch
                                        checked={notifications.marketingEmails}
                                        onCheckedChange={(checked) => setNotifications({ ...notifications, marketingEmails: checked })}
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <Typography variant="bodySmall" weight="medium">Weekly Digest</Typography>
                                        <Typography variant="caption" color="muted">Weekly summary of your account activity</Typography>
                                    </div>
                                    <Switch
                                        checked={notifications.weeklyDigest}
                                        onCheckedChange={(checked) => setNotifications({ ...notifications, weeklyDigest: checked })}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <Button>
                                    <SaveIcon className="h-4 w-4 mr-2" />
                                    Save Preferences
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Security */}
                <TabsContent value="security" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Password & Security</CardTitle>
                            <CardDescription>
                                Manage your password and security settings
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Change Password */}
                            <div className="space-y-4">
                                <Typography variant="bodySmall" weight="semibold">Change Password</Typography>

                                <div className="space-y-2">
                                    <Label htmlFor="currentPassword">Current Password</Label>
                                    <div className="relative">
                                        <Input
                                            id="currentPassword"
                                            type={showCurrentPassword ? "text" : "password"}
                                            placeholder="Enter current password"
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            className="absolute right-0 top-0 h-full px-3"
                                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                        >
                                            {showCurrentPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                                        </Button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="newPassword">New Password</Label>
                                        <div className="relative">
                                            <Input
                                                id="newPassword"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Enter new password"
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                className="absolute right-0 top-0 h-full px-3"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                                        <Input
                                            id="confirmPassword"
                                            type="password"
                                            placeholder="Confirm new password"
                                        />
                                    </div>
                                </div>

                                <Button>Update Password</Button>
                            </div>

                            {/* Two-Factor Authentication */}
                            <div className="space-y-4">
                                <Typography variant="bodySmall" weight="semibold">Two-Factor Authentication</Typography>

                                <div className="flex items-center justify-between p-4 border rounded-lg">
                                    <div className="space-y-1">
                                        <Typography variant="bodySmall" weight="medium">Enable 2FA</Typography>
                                        <Typography variant="caption" color="muted">
                                            Add an extra layer of security to your account
                                        </Typography>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {security.twoFactorEnabled ? (
                                            <Badge variant="default" className="bg-green-100 text-green-800">
                                                <CheckIcon className="h-3 w-3 mr-1" />
                                                Enabled
                                            </Badge>
                                        ) : (
                                            <Badge variant="secondary">Disabled</Badge>
                                        )}
                                        <Switch
                                            checked={security.twoFactorEnabled}
                                            onCheckedChange={(checked) => setSecurity({ ...security, twoFactorEnabled: checked })}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Session Management */}
                            <div className="space-y-4">
                                <Typography variant="bodySmall" weight="semibold">Session Management</Typography>

                                <div className="space-y-2">
                                    <Label htmlFor="sessionTimeout">Session Timeout</Label>
                                    <Select value={security.sessionTimeout} onValueChange={(value) => setSecurity({ ...security, sessionTimeout: value })}>
                                        <SelectTrigger className="w-[200px]">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="15">15 minutes</SelectItem>
                                            <SelectItem value="30">30 minutes</SelectItem>
                                            <SelectItem value="60">1 hour</SelectItem>
                                            <SelectItem value="240">4 hours</SelectItem>
                                            <SelectItem value="never">Never</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <Typography variant="bodySmall" weight="medium">Login Alerts</Typography>
                                        <Typography variant="caption" color="muted">Get notified of new login attempts</Typography>
                                    </div>
                                    <Switch
                                        checked={security.loginAlerts}
                                        onCheckedChange={(checked) => setSecurity({ ...security, loginAlerts: checked })}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <Button>
                                    <SaveIcon className="h-4 w-4 mr-2" />
                                    Save Security Settings
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Billing */}
                <TabsContent value="billing" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Billing & Subscription</CardTitle>
                            <CardDescription>
                                Manage your subscription and billing information
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Current Plan */}
                            <div className="p-4 border rounded-lg">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Typography variant="bodySmall" weight="semibold">Current Plan</Typography>
                                        <Typography variant="h4" weight="bold" color="primary">Pro Plan</Typography>
                                        <Typography variant="small" color="muted">$29/month • Next billing: Dec 15, 2024</Typography>
                                    </div>
                                    <Badge variant="default">Active</Badge>
                                </div>
                                <div className="flex gap-3">
                                    <Button variant="outline" size="sm">Change Plan</Button>
                                    <Button variant="outline" size="sm">Cancel Subscription</Button>
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div className="space-y-4">
                                <Typography variant="bodySmall" weight="semibold">Payment Method</Typography>

                                <div className="p-4 border rounded-lg">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <CreditCardIcon className="h-8 w-8 text-muted-foreground" />
                                            <div>
                                                <Typography variant="bodySmall" weight="medium">•••• •••• •••• 4242</Typography>
                                                <Typography variant="caption" color="muted">Expires 12/2025</Typography>
                                            </div>
                                        </div>
                                        <Button variant="outline" size="sm">Update</Button>
                                    </div>
                                </div>
                            </div>

                            {/* Billing History */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <Typography variant="bodySmall" weight="semibold">Billing History</Typography>
                                    <Button variant="outline" size="sm">View All</Button>
                                </div>

                                <div className="space-y-2">
                                    {[
                                        { date: "Nov 15, 2024", amount: "$29.00", status: "Paid" },
                                        { date: "Oct 15, 2024", amount: "$29.00", status: "Paid" },
                                        { date: "Sep 15, 2024", amount: "$29.00", status: "Paid" }
                                    ].map((invoice, index) => (
                                        <div key={index} className="flex items-center justify-between p-3 border rounded">
                                            <div className="flex items-center gap-3">
                                                <div>
                                                    <Typography variant="small" weight="medium">{invoice.amount}</Typography>
                                                    <Typography variant="caption" color="muted">{invoice.date}</Typography>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Badge variant="default" className="bg-green-100 text-green-800">
                                                    {invoice.status}
                                                </Badge>
                                                <Button variant="ghost" size="sm">Download</Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Preferences */}
                <TabsContent value="preferences" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Application Preferences</CardTitle>
                            <CardDescription>
                                Customize your application experience
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Theme */}
                            <div className="space-y-2">
                                <Label>Theme</Label>
                                <Select value={preferences.theme} onValueChange={(value) => setPreferences({ ...preferences, theme: value })}>
                                    <SelectTrigger className="w-[200px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">
                                            <div className="flex items-center gap-2">
                                                <SunIcon className="h-4 w-4" />
                                                Light
                                            </div>
                                        </SelectItem>
                                        <SelectItem value="dark">
                                            <div className="flex items-center gap-2">
                                                <MoonIcon className="h-4 w-4" />
                                                Dark
                                            </div>
                                        </SelectItem>
                                        <SelectItem value="system">
                                            <div className="flex items-center gap-2">
                                                <MonitorIcon className="h-4 w-4" />
                                                System
                                            </div>
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Language */}
                            <div className="space-y-2">
                                <Label>Language</Label>
                                <Select value={preferences.language} onValueChange={(value) => setPreferences({ ...preferences, language: value })}>
                                    <SelectTrigger className="w-[200px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="en">English</SelectItem>
                                        <SelectItem value="es">Spanish</SelectItem>
                                        <SelectItem value="fr">French</SelectItem>
                                        <SelectItem value="de">German</SelectItem>
                                        <SelectItem value="ja">Japanese</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Date & Time Format */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Date Format</Label>
                                    <Select value={preferences.dateFormat} onValueChange={(value) => setPreferences({ ...preferences, dateFormat: value })}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="MM/dd/yyyy">MM/dd/yyyy</SelectItem>
                                            <SelectItem value="dd/MM/yyyy">dd/MM/yyyy</SelectItem>
                                            <SelectItem value="yyyy-MM-dd">yyyy-MM-dd</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label>Time Format</Label>
                                    <Select value={preferences.timeFormat} onValueChange={(value) => setPreferences({ ...preferences, timeFormat: value })}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="12h">12 hour</SelectItem>
                                            <SelectItem value="24h">24 hour</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Default Workflow Privacy */}
                            <div className="space-y-2">
                                <Label>Default Workflow Privacy</Label>
                                <Select value={preferences.defaultWorkflowPrivacy} onValueChange={(value) => setPreferences({ ...preferences, defaultWorkflowPrivacy: value })}>
                                    <SelectTrigger className="w-[200px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="private">Private</SelectItem>
                                        <SelectItem value="public">Public</SelectItem>
                                        <SelectItem value="team">Team Only</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex justify-end">
                                <Button>
                                    <SaveIcon className="h-4 w-4 mr-2" />
                                    Save Preferences
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Advanced */}
                <TabsContent value="advanced" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>API Keys</CardTitle>
                            <CardDescription>
                                Manage your API keys for integrations
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between p-4 border rounded-lg">
                                <div>
                                    <Typography variant="bodySmall" weight="medium">Production API Key</Typography>
                                    <Typography variant="caption" color="muted">sk-proj-••••••••••••••••••••••••••••••••</Typography>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm">Regenerate</Button>
                                    <Button variant="outline" size="sm">Copy</Button>
                                </div>
                            </div>

                            <Button>
                                <KeyIcon className="h-4 w-4 mr-2" />
                                Create New API Key
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Data Export</CardTitle>
                            <CardDescription>
                                Export your data and workflows
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Typography variant="small" color="muted">
                                Download all your workflows, data, and account information in JSON format.
                            </Typography>
                            <Button variant="outline">
                                <DownloadIcon className="h-4 w-4 mr-2" />
                                Export All Data
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="border-destructive/50">
                        <CardHeader>
                            <CardTitle className="text-destructive">Danger Zone</CardTitle>
                            <CardDescription>
                                Irreversible and destructive actions
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg">
                                    <div>
                                        <Typography variant="bodySmall" weight="medium">Sign out all devices</Typography>
                                        <Typography variant="caption" color="muted">This will sign you out of all devices except this one</Typography>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        <LogOutIcon className="h-4 w-4 mr-2" />
                                        Sign Out All
                                    </Button>
                                </div>

                                <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg">
                                    <div>
                                        <Typography variant="bodySmall" weight="medium">Delete Account</Typography>
                                        <Typography variant="caption" color="muted">Permanently delete your account and all data</Typography>
                                    </div>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button variant="destructive" size="sm">
                                                <TrashIcon className="h-4 w-4 mr-2" />
                                                Delete Account
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action cannot be undone. This will permanently delete your account
                                                    and remove your data from our servers.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction className="bg-destructive text-destructive-foreground">
                                                    Delete Account
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
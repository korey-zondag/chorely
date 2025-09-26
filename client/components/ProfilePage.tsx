import Header from './Header'
import Footer from './Footer'

function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <br></br>
      <div className="app flex flex-grow flex-col items-center">
        <h1 className="text-3xl font-bold">My Profile</h1>

        {/* Profile Settings Form */}
        <div className="mt-8 w-full max-w-md space-y-6">
          {/* Personal Information Box */}
          <div className="rounded-lg border bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Personal Information
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Display Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Update Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Update Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          </div>

          {/* Notification Preferences Box */}
          <div className="rounded-lg border bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Notification Preferences
            </h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="emailNotifications"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="emailNotifications"
                  className="ml-2 text-sm text-gray-700"
                >
                  Email notifications for chore reminders
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="pushNotifications"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="pushNotifications"
                  className="ml-2 text-sm text-gray-700"
                >
                  Push notifications
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="weeklyReminder"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="weeklyReminder"
                  className="ml-2 text-sm text-gray-700"
                >
                  Weekly summary emails
                </label>
              </div>
            </div>
          </div>

          {/* Chore Preferences Box */}
          <div className="rounded-lg border bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Chore Preferences
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="choreDuration"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Default Chore Duration
                </label>
                <select
                  id="choreDuration"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="60">1 hour</option>
                  <option value="120">2 hours</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="reminderTime"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Preferred Reminder Time
                </label>
                <input
                  id="reminderTime"
                  type="time"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
            <button className="rounded-lg bg-sky-400 px-8 py-3 font-bold text-white transition duration-200 hover:bg-blue-500">
              Save Profile Settings
            </button>
          </div>
        </div>
      </div>
      <br></br>
      <Footer />
    </div>
  )
}

export default ProfilePage

import { useState } from 'react'

interface CalendarProps {
  onDateSelect?: (date: Date) => void
  selectedDate?: Date
}

export default function Calendar({
  onDateSelect,
  selectedDate,
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())

  const today = new Date()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  // Get first day of the month and number of days
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1)
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0)
  const startDate = new Date(firstDayOfMonth)
  startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay())

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1))
  }

  const handleDateClick = (date: Date) => {
    if (onDateSelect) {
      onDateSelect(date)
    }
  }

  const isToday = (date: Date) => {
    return date.toDateString() === today.toDateString()
  }

  const isSelected = (date: Date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString()
  }

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentMonth
  }

  // Generate calendar days
  const generateCalendarDays = () => {
    const days = []
    const current = new Date(startDate)

    for (let i = 0; i < 42; i++) {
      // 6 weeks * 7 days
      days.push(new Date(current))
      current.setDate(current.getDate() + 1)
    }

    return days
  }

  const calendarDays = generateCalendarDays()

  return (
    <div className="mx-auto w-full max-w-4xl rounded-lg border bg-white shadow-lg">
      {/* Calendar Header */}
      <div className="flex items-center justify-between border-b bg-gradient-to-r from-sky-400 to-yellow-300 p-6">
        <button
          onClick={goToPreviousMonth}
          className="rounded-full p-2 text-white transition-colors hover:bg-white/20"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-white">
          {monthNames[currentMonth]} {currentYear}
        </h2>

        <button
          onClick={goToNextMonth}
          className="rounded-full p-2 text-white transition-colors hover:bg-white/20"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 border-b">
        {dayNames.map((day) => (
          <div
            key={day}
            className="border-r bg-gray-50 p-4 text-center font-semibold text-gray-700 last:border-r-0"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7">
        {calendarDays.map((date, index) => (
          <div
            key={index}
            className="relative h-24 border-b border-r last:border-r-0"
          >
            <button
              onClick={() => handleDateClick(date)}
              className={`
                relative h-full w-full p-2 text-left transition-colors hover:bg-blue-50
                ${!isCurrentMonth(date) ? 'bg-gray-50/50 text-gray-400' : 'text-gray-900'}
                ${isToday(date) ? 'bg-blue-100 font-bold' : ''}
                ${isSelected(date) ? 'bg-blue-200 ring-2 ring-blue-400' : ''}
              `}
            >
              <span className="text-sm">{date.getDate()}</span>

              {/* Today indicator */}
              {isToday(date) && (
                <div className="absolute right-1 top-1 h-2 w-2 rounded-full bg-blue-500"></div>
              )}

              {/* Sample chore indicators - you can customize this */}
              {isCurrentMonth(date) && date.getDate() % 7 === 0 && (
                <div className="absolute bottom-1 left-1 right-1">
                  <div className="h-1 w-full rounded-full bg-yellow-400"></div>
                  <div className="mt-1 text-xs text-gray-600">Chores</div>
                </div>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Calendar Footer */}
      <div className="border-t bg-gray-50 p-4 text-center text-sm text-gray-600">
        Click any date to select it • Today is highlighted in blue
      </div>
    </div>
  )
}

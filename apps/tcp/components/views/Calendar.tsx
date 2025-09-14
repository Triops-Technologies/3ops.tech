import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

export function Calendar() {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  // Generate calendar days for the current month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  const calendarDays = [];
  
  // Previous month's trailing days
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    calendarDays.push({
      day: daysInPrevMonth - i,
      isCurrentMonth: false,
      hasEvent: false
    });
  }
  
  // Current month's days
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: true,
      hasEvent: [5, 12, 18, 25].includes(day) // Sample event days
    });
  }
  
  // Next month's leading days
  const totalCells = 42; // 6 rows × 7 days
  const remainingCells = totalCells - calendarDays.length;
  for (let day = 1; day <= remainingCells; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: false,
      hasEvent: false
    });
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const upcomingEvents = [
    { date: 'Dec 5', title: 'Client Meeting - Tech Corp', time: '10:00 AM' },
    { date: 'Dec 12', title: 'Project Review', time: '2:00 PM' },
    { date: 'Dec 18', title: 'Team Standup', time: '9:00 AM' },
    { date: 'Dec 25', title: 'Holiday Break', time: 'All Day' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#3D3D3D] mb-2">Calendar</h1>
          <p className="text-[#3D3D3D]/70">Manage your schedule and appointments</p>
        </div>
        <Button className="bg-[#F7F7F7] hover:bg-[#EDEDED] text-[#3D3D3D] border border-[#3D3D3D]/20">
          <Plus className="w-4 h-4 mr-2" />
          Add Event
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="lg:col-span-2 p-6 bg-[#F7F7F7] border-[#EDEDED]">
          <div className="space-y-4">
            {/* Calendar Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#3D3D3D]">
                {monthNames[currentMonth]} {currentYear}
              </h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="border-[#EDEDED] hover:bg-[#889870] hover:text-[#EDEDED]">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-[#EDEDED] hover:bg-[#889870] hover:text-[#EDEDED]">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 gap-2">
              {daysOfWeek.map(day => (
                <div key={day} className="p-2 text-center text-sm font-medium text-[#3D3D3D]/70">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((dayInfo, index) => (
                <div
                  key={index}
                  className={`
                    p-2 h-12 flex items-center justify-center text-sm relative cursor-pointer
                    ${dayInfo.isCurrentMonth 
                      ? 'text-[#3D3D3D] hover:bg-[#EDEDED]' 
                      : 'text-[#3D3D3D]/30'
                    }
                    ${dayInfo.day === currentDate.getDate() && dayInfo.isCurrentMonth
                      ? 'bg-[#F7F7F7] text-[#3D3D3D] rounded border border-[#3D3D3D]/20'
                      : ''
                    }
                  `}
                >
                  {dayInfo.day}
                  {dayInfo.hasEvent && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#889870] rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Upcoming Events */}
        <Card className="p-6 bg-[#F7F7F7] border-[#EDEDED]">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#3D3D3D]">Upcoming Events</h3>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-3 bg-[#EDEDED] rounded space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#3D3D3D] font-medium bg-[#F7F7F7] px-2 py-1 rounded border border-[#3D3D3D]/20">{event.date}</span>
                    <span className="text-xs text-[#3D3D3D]/60">{event.time}</span>
                  </div>
                  <p className="text-sm font-medium text-[#3D3D3D]">{event.title}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle2, Calendar, Clock, ChevronLeft, ChevronRight, User, Building2, Mail, Phone } from 'lucide-react';

const ScheduleDemoFormSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    facilityType: '',
    selectedDate: '',
    selectedTime: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);

    gsap.fromTo(
      successRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }
    );
  };

  const facilityTypes = [
    'Senior Living Community',
    'Physical Therapy Clinic',
    'Rehabilitation Center',
    'Occupational Therapy Clinic',
    'Behavioral Health Clinic',
    'Home Health Agency',
    'Skilled Nursing Facility',
    'Transitional Care Facility',
    'Other'
  ];

  const timeSlots = [
    '9:00am',
    '10:00am',
    '11:00am',
    '12:00pm',
    '1:00pm',
    '2:00pm',
    '3:00pm',
    '4:00pm'
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, month, day);
      const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;
      const isPast = currentDate < new Date(new Date().setHours(0, 0, 0, 0));
      days.push({
        day,
        date: currentDate,
        isWeekend,
        isPast,
        isAvailable: !isWeekend && !isPast
      });
    }
    
    return days;
  };

  const days = getDaysInMonth(currentMonth);

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric'
    });
  };

  const formatMonthYear = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric'
    });
  };

  const canProceed = () => {
    if (currentStep === 1) {
      return formData.selectedDate && formData.selectedTime;
    } else {
      return formData.name && formData.email && formData.phone && formData.organization && formData.facilityType;
    }
  };

  const nextStep = () => {
    if (canProceed()) {
      if (currentStep === 2) {
        handleSubmit();
      } else {
        setCurrentStep(2);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(1);
    }
  };

  return (
    <section
      id="demo-form"
      ref={sectionRef}
      className="py-24 md:py-32 bg-white"
    >
      <div className="container mx-auto px-8">
        <div className="max-w-7xl mx-auto">
          {!isSubmitted ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Left Sidebar */}
              <div className="lg:col-span-4 bg-white border-r border-gray-200 p-8 lg:p-12">
                <div className="mb-8">
                  <div className="text-2xl font-bold text-primary mb-2">
                    Avalon Labs<span className="text-accent">.ai</span>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4">
                    <User size={32} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Product Demo
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    See how Avalon Labs .ai transforms lead generation for healthcare facilities
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock size={20} className="text-primary" />
                    <span>30 min</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar size={20} className="text-primary" />
                    <span>Web conferencing details provided upon confirmation</span>
                  </div>
                </div>

                {formData.selectedDate && formData.selectedTime && (
                  <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                    <p className="text-sm font-semibold text-primary mb-3">
                      Selected Time:
                    </p>
                    <p className="text-lg font-bold text-foreground mb-1">
                      {formData.selectedTime}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(new Date(formData.selectedDate))}
                    </p>
                  </div>
                )}
              </div>

              {/* Right Content Area */}
              <div className="lg:col-span-8 p-8 lg:p-12">
                {/* Step 1: Select Date & Time */}
                {currentStep === 1 && (
                  <div className="animate-in fade-in duration-300">
                    <h3 className="text-2xl font-bold text-foreground mb-8">
                      Select a Date & Time
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Calendar */}
                      <div>
                        {/* Month Navigation */}
                        <div className="flex items-center justify-between mb-6">
                          <h4 className="text-lg font-bold text-foreground">
                            {formatMonthYear(currentMonth)}
                          </h4>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={previousMonth}
                              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                              <ChevronLeft size={20} className="text-foreground" />
                            </button>
                            <button
                              type="button"
                              onClick={nextMonth}
                              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                              <ChevronRight size={20} className="text-foreground" />
                            </button>
                          </div>
                        </div>

                        {/* Calendar Grid */}
                        <div className="mb-6">
                          {/* Day Headers */}
                          <div className="grid grid-cols-7 gap-2 mb-2">
                            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
                              <div
                                key={day}
                                className="text-center text-xs font-semibold text-muted-foreground py-2"
                              >
                                {day}
                              </div>
                            ))}
                          </div>

                          {/* Calendar Days */}
                          <div className="grid grid-cols-7 gap-2">
                            {days.map((dayInfo, index) => {
                              if (!dayInfo) {
                                return <div key={`empty-${index}`} />;
                              }

                              const dateString = dayInfo.date.toISOString().split('T')[0];
                              const isSelected = formData.selectedDate === dateString;
                              const isToday = dayInfo.date.toDateString() === new Date().toDateString();

                              return (
                                <button
                                  key={index}
                                  type="button"
                                  disabled={!dayInfo.isAvailable}
                                  onClick={() => {
                                    if (dayInfo.isAvailable) {
                                      setFormData({ ...formData, selectedDate: dateString });
                                    }
                                  }}
                                  className={`
                                    aspect-square rounded-lg text-sm font-medium transition-all duration-200
                                    ${!dayInfo.isAvailable 
                                      ? 'text-gray-300 cursor-not-allowed' 
                                      : isSelected
                                        ? 'bg-primary text-white shadow-lg scale-105'
                                        : isToday
                                          ? 'bg-primary/10 text-primary hover:bg-primary/20'
                                          : 'hover:bg-gray-100 text-foreground'
                                    }
                                  `}
                                >
                                  {dayInfo.day}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Timezone */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock size={16} />
                          <span>Eastern time - US & Canada</span>
                        </div>
                      </div>

                      {/* Time Slots */}
                      <div>
                        {formData.selectedDate ? (
                          <>
                            <h4 className="text-lg font-bold text-foreground mb-6">
                              {formatDate(new Date(formData.selectedDate))}
                            </h4>
                            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                              {timeSlots.map((time, index) => {
                                const isSelected = formData.selectedTime === time;
                                
                                return (
                                  <button
                                    key={index}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, selectedTime: time })}
                                    className={`
                                      w-full p-4 rounded-lg border-2 text-left font-medium transition-all duration-200
                                      ${isSelected
                                        ? 'border-primary bg-primary text-white shadow-md'
                                        : 'border-gray-200 hover:border-primary hover:bg-primary/5 text-foreground'
                                      }
                                    `}
                                  >
                                    {time}
                                  </button>
                                );
                              })}
                            </div>
                          </>
                        ) : (
                          <div className="flex items-center justify-center h-full text-center">
                            <div>
                              <Calendar size={48} className="text-gray-300 mx-auto mb-4" />
                              <p className="text-muted-foreground">
                                Select a date to see available times
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Next Button */}
                    <div className="flex justify-end mt-8 pt-6 border-t border-gray-200">
                      <Button
                        type="button"
                        onClick={nextStep}
                        disabled={!canProceed()}
                        size="lg"
                        className="bg-primary text-white hover:bg-primary/90 px-8 h-12 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next
                        <ChevronRight size={20} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Enter Details */}
                {currentStep === 2 && (
                  <div className="animate-in fade-in duration-300">
                    <h3 className="text-2xl font-bold text-foreground mb-8">
                      Enter Your Details
                    </h3>

                    <div className="space-y-6 max-w-2xl">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-foreground font-semibold flex items-center gap-2">
                          <User size={16} />
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="h-12 rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-foreground font-semibold flex items-center gap-2">
                          <Mail size={16} />
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="h-12 rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-foreground font-semibold flex items-center gap-2">
                          <Phone size={16} />
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                          className="h-12 rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="organization" className="text-foreground font-semibold flex items-center gap-2">
                          <Building2 size={16} />
                          Organization *
                        </Label>
                        <Input
                          id="organization"
                          name="organization"
                          type="text"
                          required
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="Sunrise Senior Living"
                          className="h-12 rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="facilityType" className="text-foreground font-semibold">
                          Facility Type *
                        </Label>
                        <select
                          id="facilityType"
                          name="facilityType"
                          required
                          value={formData.facilityType}
                          onChange={handleChange}
                          className="flex h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                        >
                          <option value="">Select your facility type</option>
                          {facilityTypes.map((type, index) => (
                            <option key={index} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                      <Button
                        type="button"
                        onClick={prevStep}
                        variant="outline"
                        size="lg"
                        className="px-8 h-12 rounded-lg border-2"
                      >
                        <ChevronLeft size={20} className="mr-2" />
                        Back
                      </Button>
                      <Button
                        type="button"
                        onClick={nextStep}
                        disabled={!canProceed() || isSubmitting}
                        size="lg"
                        className="bg-primary text-white hover:bg-primary/90 px-8 h-12 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Scheduling...' : 'Schedule Event'}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div
              ref={successRef}
              className="text-center py-24 bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-3xl mx-auto"
            >
              <div className="inline-block p-8 bg-gradient-to-br from-success/10 to-success/5 rounded-full mb-8">
                <CheckCircle2
                  size={80}
                  strokeWidth={2}
                  className="text-success"
                />
              </div>
              <h3 className="text-4xl font-bold mb-4 text-foreground">
                You're Scheduled! 🎉
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                A calendar invitation has been sent to <strong className="text-foreground">{formData.email}</strong>
              </p>
              <div className="bg-gray-50 rounded-xl p-8 max-w-lg mx-auto mb-8 border border-gray-200">
                <p className="text-sm font-semibold text-primary mb-4">
                  Demo Details:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-3">
                    <Calendar size={20} className="text-primary" />
                    <span className="font-medium text-foreground">
                      {formData.selectedDate && formatDate(new Date(formData.selectedDate))}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Clock size={20} className="text-primary" />
                    <span className="font-medium text-foreground">
                      {formData.selectedTime} EST
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ScheduleDemoFormSection;

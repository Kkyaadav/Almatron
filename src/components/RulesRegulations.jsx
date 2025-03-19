import { IdCard, Users, Ban, Utensils, Shirt, AlertTriangle, Clock, Recycle, Bell } from "lucide-react";

export function RulesRegulations() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Rules & Regulations</h1>
        <p className="text-gray-600 text-lg mb-6 text-center">
          Please adhere to the following rules and regulations to maintain a safe and productive environment.
        </p>
        
        <div className="space-y-6">
          {rules.map((rule, index) => (
            <div key={index} className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-md shadow-sm flex items-center">
              <div className="text-blue-700 text-2xl mr-4">{rule.icon}</div>
              <div>
                <h2 className="text-xl font-semibold text-blue-700 mb-2">{rule.title}</h2>
                <p className="text-gray-700">{rule.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const rules = [
  {
    title: "Carry College ID",
    description: "Participants must carry their college ID cards.",
    icon: <IdCard />,
  },
  {
    title: "Respect & Cooperation",
    description: "Participants must behave cordially and co-operate with other members.",
    icon: <Users />,
  },
  {
    title: "No Violence or Damage",
    description: "Participants must not indulge in violent behavior, must not damage property/facilities and must upkeep discipline.",
    icon: <Ban />,
  },
  {
    title: "No Weapons Allowed",
    description: "Weapons of any kind are prohibited on DSATM campus.",
    icon: <Ban />,
  },
  {
    title: "No Alcohol, Drugs, or Narcotics",
    description: "Alcohol, Drugs, and Narcotics are strictly forbidden.",
    icon: <Ban />,
  },
  {
    title: "Meals & Refreshments",
    description: "All meals and refreshments shall be provided at the venue. Additionally, participants are allowed to carry necessities for the 24 hours.",
    icon: <Utensils />,
  },
  {
    title: "Dress Code Compliance",
    description: "Participants are required to adhere to the DSATM dress code (sleeveless, tight-fitted clothes, ripped jeans, shorts, and track pants are not allowed). Please dress in semi-formal attire.",
    icon: <Shirt />,
  },
  {
    title: "Maintain Cleanliness",
    description: "Participants are to maintain the cleanliness of the campus.",
    icon: <Recycle />,
  },
  {
    title: "Follow Timings",
    description: "Be punctual and adhere to the designated schedules.",
    icon: <Clock />,
  },
  {
    title: "Report Issues Immediately",
    description: "It is at the sole discretion of the organizing committee to disqualify participants indulging in misbehavior of any sort.",
    icon: <AlertTriangle />,
  },
];
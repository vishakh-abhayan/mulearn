import { Linkedin } from "lucide-react";
// import Image from "next/image";

export function ProfileCard({ name, role, imageUrl, hasLinkedin = true }) {
  return (
    <div className="flex items-center gap-3 p-6 rounded-xl bg-white shadow-md justify-between">
      <div className="flex items-start flex-col gap-3 space-y-8">
        <div className="relative">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              className="w-24 h-24 rounded-md object-cover shadow-sm"
            />
          ) : (
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder"
              className="w-24 h-24 rounded-md object-cover shadow-sm"
            />
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      {hasLinkedin && (
        <div className="flex items-center">
          {" "}
          {/* Optional: Wrap LinkedIn icon in a div */}
          <a
            href="#"
            className="p-2 text-gray-600 hover:text-gray-900"
            aria-label={`${name}'s LinkedIn profile`}
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      )}
    </div>
  );
}

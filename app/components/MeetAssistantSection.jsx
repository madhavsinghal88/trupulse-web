import Image from "next/image";
import Button from "./common/Button";
import { ArrowRight } from "lucide-react";

export default function MeetAssistantSection() {
  return (
    <section className="bg-purple-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 max-w-7xl m-auto">
        {/* Left Side Text */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet AI Assistant
          </h2>
          <p className="text-lg sm:text-2xl mb-8  max-w-md">
            accusantium doloremque laudantium, totam rem aperiam.
          </p>

          <div className="space-y-6 text-sm">
            <div>
              <p className="font-bold text-base">Creating</p>
              <p className="">
                architecto beatae vitae dicta architecto beatae vitae dicta sunt
              </p>
            </div>
            <hr />
            <div>
              <p className="font-bold  text-base">Exicuter</p>
              <p className="">
                architecto beatae vitae dicta architecto beatae vitae dicta sunt
              </p>
            </div>
            <hr />
            <div>
              <p className="font-bold text-base ">Analysing</p>
              <p className="">
                architecto beatae vitae dicta architecto beatae vitae dicta sunt
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <Button text="Lets Start Journey" icon={ArrowRight} />
          </div>
        </div>

        {/* Right Side Card */}
        <div className="w-full lg:w-1/2 text-secondary-text">
          <div className="relative bg-white rounded-2xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <Image width={30} height={30} src="/images/frog.png" alt="frog" />AI Assistant
            </h3>
            <div className="text-sm leading-relaxed border rounded-md p-4 mb-4 bg-gray-50">
              Selecting the right design software depends on your needs, whether
              for graphic design, UI/UX, 3D modeling, or video editing. Here are
              some top choices:
              <br />
              <br />
              <strong>Graphic Design:</strong> Adobe Photoshop, Adobe
              Illustrator, Canva
              <br />
              <strong>UI/UX Design:</strong> Figma, Adobe XD, Sketch
              <br />
              <strong>3D Modeling:</strong> Blender, AutoCAD, Cinema 4D
              <br />
              <strong>Video Editing:</strong> Adobe Premiere Pro, DaVinci
              Resolve, Final Cut Pro
              <br />
              <br />
              Consider factors like ease of use, collaboration features, and
              industry standards when making your choice.
              <div className="mt-4">
                <button className="border rounded-full px-4 py-2 text-sm">
                  Save as Template
                </button>
              </div>
            </div>

            <div className="text-sm  border rounded-md p-4">
              Start a 1:1 discussion with a clear purpose. Define the admin and
              participant roles with titles and descriptions. Outline key
              discussion topics to keep the conversation focused. Craft an
              engaging first message to initiate the chat. Ensure a smooth and
              interactive experience for both participants.
            </div>

            {/* Dropdowns + Icon Button */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <select className="border rounded-full px-4 py-2 text-sm">
                  <option>Select Template</option>
                </select>
                <select className="border rounded-full px-4 py-2 text-sm">
                  <option>Select Tone</option>
                </select>
              </div>
              <div className="p-2 border rounded-full ">
                <div className="p-1 border rounded-full border-black relative">
                  <button className="w-10 h-10 rounded-full border bg-black flex items-center justify-center hover:bg-gray-100">
                    <span className="text-lg text-white">↗</span>
                  </button>
                                <Image width={30} height={30} className="absolute -right-5 " src="/images/blue.png" alt="frog" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


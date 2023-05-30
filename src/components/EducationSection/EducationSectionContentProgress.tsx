import { coursesCertificationsProgress } from "@/data";
import React from "react";
import { CardProgress } from "./CardProgress";

export const EducationSectionContentProgress = () => {
  return (
    <ul className="grid sm:grid-cols-4 xl:max-w-[920px] gap-6 mx-auto list-disc text-yellow-600">
        {
            coursesCertificationsProgress.map((course) => (
              <li key={course.id}>{course.title}</li>
            ))
        }
    </ul>
  );
};

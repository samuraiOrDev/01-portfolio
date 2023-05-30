import { coursesCertificationsProgress } from "@/data";
import React from "react";
import { CardProgress } from "./CardProgress";

export const EducationSectionContentProgress = () => {
  return (
    <div className="grid sm:grid-cols-4  xl:max-w-[920px] gap-3 mx-auto">
        {
            coursesCertificationsProgress.map((course) => (
                <CardProgress
                    key={course.id}
                    title={course.title}
                    porcentaje={course.porcentaje}
                    bgColor={course.bgColor}
                    textColor={course.textColor}
                    to={course.to}
                />
            ))
        }
    </div>
  );
};

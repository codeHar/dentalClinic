import Image from "next/image";

export const Services = () => {
  return (
    <div className="py-10 sm:py-40 sm:px-0 px-4">
      <div className="flex flex-col gap-2 sm:gap-4 items-center justify-center">
        <p>DENTAL PRACTICE</p>
        <h3>EXPLORE OUR SERVICES</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="group flex flex-col items-center gap-5 text-center">
          <div className="relative max-w-max group-hover:scale-105 transition-transform duration-150">
            <svg
              viewBox="0 0 200 200"
              height={200}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ccc"
                opacity="0.3"
                d="M41.8,-35.5C52.4,-20.1,57.9,-2.8,55.7,15C53.5,32.8,43.5,51.1,26.4,62.2C9.3,73.3,-14.8,77,-30.8,67.9C-46.9,58.7,-54.8,36.5,-54.9,17.7C-55.1,-1,-47.4,-16.4,-37,-31.8C-26.5,-47.2,-13.3,-62.6,1.2,-63.5C15.6,-64.5,31.2,-50.9,41.8,-35.5Z"
                transform="translate(100 100)"
              />
            </svg>
            <Image
              src="/dental-checkup.png"
              alt="Services Image"
              width={80}
              height={500}
              className="absolute top-1/2 left-1/2 -translate-1/2"
            />
          </div>
          <div>
            <h5>Family Dentistry</h5>
            <p>
              From toddlers to grandparents, we make dental visits stress-free
              and fun for the whole family. Preventive care, gentle checkups,
              and early orthodontic guidance.
            </p>
          </div>
        </div>

        <div className="group flex flex-col items-center gap-5 text-center">
          <div className="relative max-w-max group-hover:scale-105 transition-transform duration-150">
            <svg viewBox="0 0 200 200" height={200}>
              <path
                fill="#ccc"
                opacity="0.3"
                d="M49.9,-39.1C62.6,-23.9,69.3,-3.3,63.9,12.3C58.5,27.8,41,38.3,24.1,44.3C7.2,50.3,-9.2,51.7,-25.7,46.5C-42.3,41.2,-58.9,29.2,-61.9,14.6C-64.8,0,-54.1,-17.3,-41.5,-32.4C-28.9,-47.6,-14.4,-60.6,2.1,-62.3C18.6,-64,37.2,-54.3,49.9,-39.1Z"
                transform="translate(100 100)"
              />
            </svg>

            <Image
              src="/x-ray.png"
              alt="Services Image"
              width={80}
              height={80}
              className="absolute top-1/2 left-1/2 -translate-1/2"
            />
          </div>
          <div>
            <h5>Radiography</h5>
            <p>
              Fast, comfortable, and essential for spotting hidden issues like
              cavities, bone loss, or impacted teeth early.
            </p>
          </div>
        </div>

        <div className="group flex flex-col items-center gap-5 text-center">
          <div className="relative max-w-max group-hover:scale-105 transition-transform duration-150">
            <svg viewBox="0 0 200 200" height={200}>
              <path
                fill="#ccc"
                opacity="0.3"
                d="M43.9,-29.9C59.9,-15,77.9,3.4,76.9,21.4C75.9,39.4,55.9,57,32.9,67.9C9.9,78.8,-16.1,83.1,-36.6,74C-57.1,64.9,-72.2,42.4,-74.6,20.4C-77,-1.7,-66.6,-23.3,-52.1,-37.9C-37.5,-52.5,-18.8,-60,-2.4,-58.1C14,-56.2,28,-44.8,43.9,-29.9Z"
                transform="translate(100 100)"
              />
            </svg>

            <Image
              src="/floss.png"
              alt="Services Image"
              width={80}
              height={80}
              className="absolute top-1/2 left-1/2 -translate-1/2"
            />
          </div>
          <div>
            <h5>Whitening</h5>
            <p>
              Transform your smile with our professional in-office whitening or
              take-home kits. We will help you achieve a dazzling smile that
              boosts your confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

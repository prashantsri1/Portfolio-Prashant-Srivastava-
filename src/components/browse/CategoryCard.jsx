/**
 * CategoryCard.jsx — Large clickable image card with title overlay.
 */

export default function CategoryCard({ title, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="category-card relative flex-shrink-0 w-[200px] sm:w-[230px] md:w-[260px] h-[130px] sm:h-[150px] md:h-[170px] rounded-md overflow-hidden cursor-pointer group"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Hover border */}
      <div className="absolute inset-0 rounded-md border-2 border-transparent group-hover:border-white/50 transition-colors duration-300" />

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
        <h3 className="text-white text-sm sm:text-base font-bold drop-shadow-lg">
          {title}
        </h3>
      </div>
    </div>
  );
}

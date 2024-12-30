const GradientBg = () => {
  return (
    <div className="absolute inset-0">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 via-purple-100/50 to-pink-100/50 dark:from-blue-950/50 dark:via-purple-950/50 dark:to-pink-950/50 blur-3xl opacity-70"></div>
      {/* Additional subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent dark:from-purple-950/40 blur-2xl"></div>
    </div>
  );
};

export default GradientBg;

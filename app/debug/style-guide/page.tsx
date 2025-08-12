"use client";
export default function StyleGuide() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-lg border bg-background text-foreground">Background / Foreground</div>
        <div className="p-4 rounded-lg border bg-card text-card-foreground">Card</div>
        <div className="p-4 rounded-lg border bg-secondary text-secondary-foreground">Secondary</div>
        <div className="p-4 rounded-lg border bg-accent text-accent-foreground">Accent</div>
        <div className="p-4 rounded-lg border bg-destructive text-destructive-foreground">Destructive</div>
      </div>
      <div className="space-x-2">
        <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground">Primary</button>
        <button className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground">Secondary</button>
        <button className="px-4 py-2 rounded-md border">Outline</button>
      </div>
      <p className="text-sm text-muted-foreground">اگر این‌ها درست نمایش داده نمی‌شوند، مشکل tokens یا tailwind.config است.</p>
    </div>
  );
}

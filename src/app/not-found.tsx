import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4">
      <div className="space-y-6 text-center">
        <h1 className="text-7xl font-light tracking-tight text-white sm:text-9xl">404</h1>

        <div className="space-y-3">
          <p className="text-xl font-light text-gray-300 sm:text-2xl">Page not found</p>
          <p className="mx-auto max-w-md text-sm text-gray-400 sm:text-base">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>

        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-white/10 px-6 py-3 font-light text-white transition-colors hover:bg-white/20"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

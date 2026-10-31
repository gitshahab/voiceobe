import { Coffee, Heart, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  //   const PAYPAL_TIP_URL = "https://www.paypal.me/YOUR_PAYPAL_USERNAME/1USD";

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-1">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="voiceobe logo"
              width={30}
              height={12}
              className="border border-white rounded-lg"
            />
            <p className="font-semibold text-slate-200 text-sm flex items-center justify-center md:justify-start gap-1.5">
              Voiceobe <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </p>
          </div>

          <p className="text-xs text-slate-500 max-w-sm pl-9">
            Free forever. No telemetry cookies, no subscriptions, and zero
            paywalls for creators.
          </p>
        </div>

        {/* Buy Me A Coffee ($1 via PayPal) */}
        {/* <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href={PAYPAL_TIP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 transition text-xs font-semibold shadow-inner"
          >
            <Coffee className="w-4 h-4 text-amber-400" />
            <span>Buy Server Coffee ($1 via PayPal)</span>
          </a>
        </div> */}
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-600 flex items-center justify-center gap-1">
        All rights reserved Crafted with{" "}
        <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for
        unrestricted audio synthesis.
      </div>
    </footer>
  );
}

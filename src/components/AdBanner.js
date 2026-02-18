"use client";

/**
 * AdBanner.js - Google AdSense 광고 배너
 *
 * 3개의 광고 위치에 따라 각각 다른 슬롯 ID를 사용합니다:
 * - Top Banner: 7353614785
 * - Middle Banner: 6040533118
 * - Bottom Banner: 9143115276
 *
 * AdSense 스크립트는 layout.js의 <head>에서 글로벌로 로드됩니다.
 */

import { useEffect, useRef } from "react";

// 위치별 슬롯 ID 매핑
const AD_SLOTS = {
    "Top Banner": "7353614785",
    "Middle Banner": "6040533118",
    "Bottom Banner": "9143115276",
};

const AD_CLIENT = "ca-pub-3488637908196788";

export default function AdBanner({ position = "default" }) {
    const adRef = useRef(null);
    const isAdPushed = useRef(false);

    useEffect(() => {
        // 광고가 이미 push되었으면 중복 실행 방지
        if (isAdPushed.current) return;

        try {
            // adsbygoogle가 로드되었는지 확인 후 push
            if (typeof window !== "undefined" && window.adsbygoogle) {
                window.adsbygoogle.push({});
                isAdPushed.current = true;
            }
        } catch (err) {
            console.error("AdSense error:", err);
        }
    }, []);

    const slotId = AD_SLOTS[position];

    // 슬롯 ID가 없으면 렌더링하지 않음
    if (!slotId) return null;

    return (
        <div className="w-full my-4" aria-label={`Advertisement - ${position}`}>
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client={AD_CLIENT}
                data-ad-slot={slotId}
                data-ad-format="auto"
                data-full-width-responsive="true"
                ref={adRef}
            />
        </div>
    );
}

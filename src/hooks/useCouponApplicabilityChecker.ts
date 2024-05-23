import { useCouponFinder } from './useCouponFinder';

import { Coupon } from '@/types/coupon';
import { couponValidator } from '@components/Coupon/couponValidator';

export const useCouponApplicabilityChecker = () => {
  const { findCouponByCode } = useCouponFinder();
  const { isCouponValid } = couponValidator();

  const isCouponApplicable = (coupon: Coupon, totalAmount: number, now: Date = new Date()) => {
    const targetCoupon = findCouponByCode(coupon.code);

    // 만료일 유효성 검사
    if (!targetCoupon || !isCouponValid(coupon)) return false;

    // 최소 주문 금액 유효성 검사
    if (coupon.minimumAmount && totalAmount < coupon.minimumAmount) {
      return false;
    }

    // 사용 가능 시간 유효성 검사
    // 2023-04-30T23:00:00.000Z
    if (targetCoupon.availableTime) {
      const [startHour, startMinute, startSecond] = targetCoupon.availableTime.start
        .split(':')
        .map(Number);

      const [endHour, endMinute, endSecond] = targetCoupon.availableTime.end.split(':').map(Number);

      const startTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        startHour,
        startMinute,
        startSecond,
      );

      const endTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        endHour,
        endMinute,
        endSecond,
      );

      if (now < startTime || now > endTime) {
        return false;
      }
    }
    return true;
  };

  return { isCouponApplicable };
};

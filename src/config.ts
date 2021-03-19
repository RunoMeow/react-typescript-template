const width = window.innerWidth || document.body.clientWidth;
const widthRate = width / 100;

export const rootFontSize = `${Math.min(widthRate * 4, 16)}px`;
export const navigateBarHeight = `${Math.min(widthRate * 15, 60)}px`;
export const horizontalSpace = `${Math.min(widthRate * 4, 18)}px`;
export const horizontalSpaceX2 = `${Math.min(widthRate * 8, 36)}px`;
export const verticalSpace = `${Math.min(widthRate * 6, 27)}px`;
export const borderRadius = `${Math.min(widthRate * 3, 12)}px`;
export const tabBarHeight = `${Math.min(widthRate * 20, 80)}px`;
export const baseURL = 'http://test.testtesttest.test/';

document.documentElement.setAttribute('style', `font-size: ${rootFontSize}`);
console.log(233);

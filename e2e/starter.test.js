/* eslint-disable no-undef */
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({
      launchArgs: {
        detoxDebugVisibility: 'YES',
      },
    });
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should have hello text', async () => {
    await expect(element(by.id('title'))).toBeVisible();
  });

  it('should type Hello Detox', async () => {
    const input = element(by.id('input'));
    await input.typeText('Hello Detox');
  });

  it('should press on Submit button and check alert text', async () => {
    await element(by.id('button')).tap();
    await expect(element(by.text('Hello Detox')).atIndex(0)).toBeVisible();
    await element(by.text('OK')).tap();
    await expect(element(by.text('OK'))).not.toBeVisible();
  });
});

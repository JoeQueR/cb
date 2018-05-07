import { KatasModule } from './katas.module';

describe('KatasModule', () => {
  let katasModule: KatasModule;

  beforeEach(() => {
    katasModule = new KatasModule();
  });

  it('should create an instance', () => {
    expect(katasModule).toBeTruthy();
  });
});

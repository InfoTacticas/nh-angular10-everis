import { PublisherPrettyPipe } from './publisher-pretty.pipe';

describe('PublisherPrettyPipe', () => {
  it('create an instance', () => {
    const pipe = new PublisherPrettyPipe();
    expect(pipe).toBeTruthy();
  });
});

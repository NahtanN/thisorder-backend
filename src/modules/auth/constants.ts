export const jwtConstants = {
  public_key: process.env.PUB_KEY.replace(/\\n/g, '\n'),
  private_key: process.env.PRIV_KEY.replace(/\\n/g, '\n'),
};

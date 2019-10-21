'use strict';

module.exports = async function(ctx) {
  return await ctx.basement.db.collection('tb_auth').find();
};

module.exports = async (ctx) => {
  const user = await ctx.mpserverless.db.collection('tb_user').find({
    id:ctx.args.id,
    name:ctx.args.name
  });
  return user;
}
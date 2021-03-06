module.exports = (mongoose,mongoosePaginate) => {
  var schema = mongoose.Schema(
    {
      id: String,
      title: String,
      description: String,
      note: String,
      published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  schema.plugin(mongoosePaginate);

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
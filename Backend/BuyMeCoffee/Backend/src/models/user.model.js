import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    bio: { 
        type: String, 
        trim: true, 
        maxlength: 160, 
        default: "" 
    },
    avatarUrl: { 
        type: String, 
        trim: true, 
        default: "https://ik.imagekit.io/piyushuj/default-avatar-profile-icon-social-media-user-vector-49816613%20(1).avif" 
    },
    password: { type: String, required: true, minlength: 8, select: false },
    refreshToken: { type: String, default: null, select: false },
  },
  { timestamps: true },
);

userSchema.pre("save", async function hashPassword() {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = function comparePassword(candidate) {
  return bcrypt.compare(candidate, this.password);
};

export const UserModel = mongoose.model("User", userSchema);

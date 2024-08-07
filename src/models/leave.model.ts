// models/Leave.ts
import mongoose, { Schema, Document } from 'mongoose';

interface ILeave extends Document {
  start_at: Date;
  end_at: Date;
  type: 'CP' | 'CF' | 'A';
  employeeId: mongoose.Types.ObjectId;
  created_at?: Date;
  updated_at?: Date;
}

const leaveSchema: Schema = new Schema({
  start_at: { type: Date, required: true },
  end_at: { type: Date, required: true },
  type: { type: String, enum: ['CP', 'CF', 'A'], required: true },
  employeeId: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Leave = mongoose.model<ILeave>('Leave', leaveSchema);
export default Leave;

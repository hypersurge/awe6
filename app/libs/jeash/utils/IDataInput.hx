/**
 * Copyright (c) 2010, Jeash contributors.
 * 
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 *   - Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *   - Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

package jeash.utils;


import haxe.io.Input;


class IDataInput
{
   var mInput:Input;
   // not implemented ...
   //var bytesAvailable(default,null) : UInt;
   //var endian : String;
   //var objectEncoding : UInt;

   public function new(inInput:Input)
   {
      mInput = inInput;
   }
   public function close() : Void { mInput.close(); }

   public function readAll( ?bufsize : Int ) : haxe.io.Bytes
      { return mInput.readAll(bufsize); }

   public function readBoolean() : Bool { return mInput.readInt8()!=0; }
   public function readByte() : Int { return mInput.readByte(); }
   public function readBytes(inLen : Int) { return mInput.read(inLen); }
   public function readDouble() : Float { return mInput.readDouble(); }
   public function readFloat() : Float { return mInput.readFloat(); }
   public function readInt() : Int { return haxe.Int32.toInt(mInput.readInt32()); }
   public function readUnsignedInt() : Int { return haxe.Int32.toInt(mInput.readInt32()); }
   public function readShort() : Int { return mInput.readInt16(); }
   public function readUTFBytes(length : Int) : haxe.io.Bytes { return mInput.read(length); }
   public function readUnsignedByte() : Int { return mInput.readByte(); }
   public function readUnsignedShort() : Int { return mInput.readUInt16(); }
}




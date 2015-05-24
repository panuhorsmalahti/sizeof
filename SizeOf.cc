#include <node.h>
#include <nan.h>
#include "library.h"

using v8::FunctionTemplate;
using v8::Handle;
using v8::Object;
using v8::String;

void InitAll(Handle<Object> exports) {
  exports->Set(NanNew<String>("sizeOf"),
    NanNew<FunctionTemplate>(sizeOf)->GetFunction());
}

NODE_MODULE(SizeOf, InitAll)

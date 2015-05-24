#include <nan.h>
#include "library.h"

NAN_METHOD(sizeOf) {
    NanScope();
    v8::Local<v8::Object> obj = NanNew<v8::Object>();
    obj->Set(NanNew<v8::String>("key"), NanNew<v8::String>("value"));
    NanReturnValue(obj);
}

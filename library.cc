#include <nan.h>
#include "library.h"

NAN_METHOD(sizeOf) {
    NanScope();
    NanReturnValue(NanNew<v8::Number>(0));
}

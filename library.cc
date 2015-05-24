#include <nan.h>
#include "library.h"

NAN_METHOD(sizeOf) {
    NanScope();
    if (args.Length() == 0) {
      NanReturnValue(NanNew<v8::Number>(0));
    } else if (args.Length() > 1) {
      return NanThrowError("Too many arguments!");
    } else {
      NanReturnValue(NanNew<v8::Number>(sizeof(args[0])));
    }
}

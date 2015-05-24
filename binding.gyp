{
    "targets": [
        {
            "target_name": "SizeOf",
            "sources": [ "SizeOf.cc", "library.cc" ],
            "include_dirs" : [
 	 			"<!(node -e \"require('nan')\")"
			]
        }
    ],
}

import React, {Suspense} from 'react';
import {useLoader} from '@react-three/fiber';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {Storage} from '@google-cloud/storage';

const storage = new Storage({
  projectId: 'cardiopedia',
  keyFilename:
    'C:\\Users\\mattc\\Desktop\\BME Senior Design\\cardiopedia-8d9ddec56374.json',
});

export function Model() {
  const bucketName = 'cardiopedia-3d';
  const fileName = '16_TAPVRtoCS_Labeled.gltf';

  const bucket = storage.bucket(bucketName);
  const file = bucket.file(fileName);
  let modelBytes = null;
  file.download().then(data => {
    modelBytes = data[0];
  });

  const gltf = useLoader(GLTFLoader, modelBytes);

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
}

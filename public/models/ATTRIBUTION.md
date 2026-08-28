# Avatar attribution

`ybot.glb` is the "Y Bot" rig from [Adobe Mixamo](https://www.mixamo.com/),
used under the Mixamo license (free for commercial and non-commercial use).

Both avatars in the app ("Default" and "Human") load this single file. The
"Human" look is produced entirely at runtime: a procedural face built from
Three.js primitives (`components/avatar/humanLayer.ts`) parented to the head
bone, plus warm per-vertex armour colours applied in `AvatarPlayer.tsx`. The
model file is never modified.

The previous "brunette" Ready Player Me avatar (`brunette.glb`, CC BY-NC 4.0)
was removed on 2026-08-28.

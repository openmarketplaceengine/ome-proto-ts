# ome-proto-ts

[![CI](https://github.com/openmarketplaceengine/ome-proto-ts/actions/workflows/blank.yml/badge.svg)](https://github.com/openmarketplaceengine/ome-proto-ts/actions/workflows/blank.yml)

A repo containing TypeScript code compiled from protobufs.

This build is powered by the [ts-proto](https://github.com/stephenh/ts-proto) 
library.

## Using this code with nice-grpc
This code is expected to work well with [**nice-grpc**](https://github.com/deeplay-io/nice-grpc).

## Tuning the TypeScript Transpiler
There are lots of [build options](https://github.com/stephenh/ts-proto#supported-options)
worth considering:
* `context=true` — allows for a Go-style `ctx` parameter for logging and tracing
* `forceLong=long` — all 64-bit numbers will be parsed with the [long](https://www.npmjs.com/package/long) library
* and more

## Semantic-Release
Git-tagging, version management, and artifact/package publishing is handled by [semantic-release](https://github.com/semantic-release/semantic-release).

Inspired by this [demo repo](https://github.com/bmvantunes/youtube-2021-may-automatic-publish-npm-semantic-release-and-github-actions).

## Secrets
* `NPM_TOKEN` was an [automation token](https://github.blog/changelog/2020-10-02-npm-automation-tokens/) created in NPM
* `GITHUB_TOKEN` is used, but not something we generated since it's [automatically provided](https://docs.github.com/en/actions/security-guides/automatic-token-authentication).

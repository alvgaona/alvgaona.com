// @flow
/* eslint-disable max-classes-per-file */

class Builder {
  bucket: Array<any>;

  constructor() {
    this.bucket = [];
  }

  append(str: string): Builder {
    if (str !== null || str !== '') {
      this.bucket.push(str);
    }
    return this;
  }

  build(): string {
    return this.bucket.join(' ');
  }
}

class StringBuilder {
  static Builder(): Builder {
    return new Builder();
  }
}

export default StringBuilder;

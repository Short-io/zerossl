// Copyright 2022 Adam K Dean <adamkdean@googlemail.com>
// Use of this source code is governed by an MIT-style
// license that can be found in the LICENSE file or at
// https://opensource.org/licenses/MIT.

/* eslint-disable @typescript-eslint/no-explicit-any */

export type CertificateList = {
  total_count: number
  result_count: number
  page: number
  limit: number
  results: CertificateRecord[]
}

export type CertificateRecord = {
  id: string
  type: string
  common_name: string
  additional_domains: string
  created: string
  expires: string
  status: string
  validation_type: string
  validation_emails: string
  replacement_for: string
  validation: {
    email_validation: { [domain: string]: string[] }
    other_methods: {
      [domain: string]: {
        file_validation_url_http: string
        file_validation_url_https: string
        file_validation_content: string[]
        cname_validation_p1: string
        cname_validation_p2: string
      }
    }
  }
}

export type CertificateSigningRequestOptions = {
  country: string
  state: string
  locality: string
  organization: string
  organizationUnit: string
  email?: string
  commonName: string
}

export type CreateCertificateOptions = {
  csr: string
  domains: string[]
  validityDays: 90 | 365
  strictDomains: boolean
}

export type KeyPair = {
  publicKey: string
  privateKey: string
}

export type ListCertificateOptions = {
  page?: number
  limit?: number
  search?: string
  certificate_status: 'draft' | 'pending_validation' | 'issued' | 'cancelled' | 'expiring_soon' | 'expire'
}

export type ZeroSSLOptions = {
  accessKey: string
  apiUrl?: string
}

export type ZeroSSLError = {
  code: number
  type: string
  message: string
}
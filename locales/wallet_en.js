export default {
  Wallet: 'Wallet',

  HD_Wallets_helps__: 'Hierarchical Deterministic Wallets (HD wallets for short) ' +
    'helps you manage multiple wallets using a mnemonic phrase ' +
    'without having to store or remember multiple private keys.',

  Mnemonic_Phrase: 'Mnemonic Phrase',
  Human__readable_and_: 'Human-readable and easy to remember.',
  The_BIP39_Mnemonic_is: 'The BIP39 Mnemonic is',
  the_very_beginning: 'the very beginning, ',
  also_the_most_important_part:　'also the most important part.',

  Generate_a_random_Mnemonic: 'Generate a random Mnemonic',
  Input_mnemonic_manually: 'Input Mnemonic Manually',

  Input_Your_Mnemonic_Manually: 'Input Your Mnemonic Manually',
  Invalid_Mnemonic: 'Invalid Mnemonic',
  Placeholder__textarea_mnemonic: 'Strength: 12 / 15 / 18 / 21 / 24 words (with checksum)',

  BIP39_Mnemonic__backup_phrase_: 'BIP39 Mnemonic (backup phrase)',
  Generate_a_random_Mnemonic__renew_: 'Generate a random Mnemonic (renew)',
  Here_is_a_example: 'Here is a example:',

  It_is_the_root_of_your_wallets: 'It is the root of your wallets.',
  Never_never_never_disclose_: 'Never, never, never disclose it to anyone.',
  Please_write_the_mnemonic_: 'Please write the mnemonic down on paper and make sure to keep it in a safe place.',
  You_can_always_restore__: 'You can always restore all of your wallets by using this mnemonic.',
  The_avatar: 'The avatar',
  is_converted_from___mnemonic: 'is converted from the hash of the mnemonic.',
  An_image_may_easier__: 'An image may easier to impress you, so please try to recognize or save it.',
  If_you_find___avatar_does_not__: 'If you find that the avatar does not match when you restore your wallets, ' +
    'it just means you entered something incorrectly; double check and fix the typo.',

  Master_Seed: 'Master Seed',
  The_master_seed_is_converted__: 'The master seed is converted (uni-directionally) from the mnemonic.',
  Same_as_your_mnemonic__never_disclose__: 'Same as your mnemonic, never disclose it to anyone.',
  You_dont_need_to_save__SEED__: 'You don\'t need to save or remember it. ' +
    'The program would later use it to generate deterministic wallets.',

  Deterministic_Wallets: 'Deterministic Wallets',
  Key_pair__can_be_derived_from__: 'Key-pair (a private key and a public key) of a specific wallet can be derived from the Master Seed.',
  VOKEN_use_the_following_5_levels_in: 'VOKEN use the following 5 levels in',
  path_as: 'path as',
  which_is_registered_and_listed_in: 'which is registered and listed in',
  you_could_find_the: 'you could find the',
  index_value_is: 'index value is',
  Wallets_OR_addresses_ar_numbered__: 'Wallets/addresses are numbered from index 0 in sequentially increasing manner.',
  Here_is_the_1st_wallet__contains: 'Here is the first wallet (#0, default), it contains',
  a_private__public_key_pair: 'a private/public key-pair',
  and: 'and',
  an_address_: 'an address:',

  It_was_derived_from_the__: 'It was derived from the Master Seed above by path',
  its_values_were_Base32_encoded: 'its values were Base32 encoded.',

  Private_Key: 'Private Key',
  You_should_always_keep_it_private_: 'You should always keep it private. ',
  Never_disclose_it_to_anyone: 'Never disclose it to anyone.',
  If_you_use_the_Proxy_clientbase_: 'If you use the Proxy clientbase or an IM in the vision network, your Private Key is needed.',

  Public_Key: 'Public Key',
  Derived_from__in_pairs: 'Derived from the Private Key, working in pairs with the Private Key.',
  Sending_a_Public_Key_is_safe: 'Sending a Public Key is safe.',

  How_do_the__keypair_works: 'How do the Private/Public Key-Pair works?',
  Data_encrypted_with_public__: 'Data encrypted with a Public Key can only be decrypted ' +
    'by using the corresponding Private Key.',
  Accordingly__data_signed_by__: 'Accordingly, data signed by a Private Key can only be verified ' +
    'by using the corresponding Public Key.',

  Only: 'Only',
  the_owner_holds_the_private_key_while__: 'the owner holds the Private Key while keeping the Public Key',
  publicly_accessible: 'publicly accessible.',
  A_signature__: 'A signature: Hash of the original data, then encrypt the hash.',

  A_private_public_keypair_could__: 'A Private/Public Key-Pair could be used for:',
  Encrypted_communication: 'Encrypted communication',
  Transactions: 'Transactions',
  etc_: 'etc.',

  Receiving_a_message__: 'Receiving a message/data package',
  Just_suppose_you_are_Alice_and__: 'Just suppose you are Alice and one of your friends is Bob.',
  Sending_and_receiving_a__: 'Sending and receiving a message/data package is briefly described as follows:',
  You_Alice_send__Bob: 'You (Alice) send a message to Bob:',
  Encrypt_the_message_with_Bob__: 'Encrypt the message with Bob\'s Public Key',
  Hash_the_message__sign_the_hash__: 'Hash the message, sign the hash with your Alice\'s Private Key',
  Send_the_encrypted_message__your_Public__: 'Send the encrypted message, your Public Key and signature to Bob',
  Bob_received_your__: 'Bob received your encrypt message and your signature:',
  Decrypt__got_the_message: 'Decrypt the message with Bob\'s Private Key, got the message',
  Verify_your_signature__: 'Verify your signature with your Alice\'s Public Key, ' +
    'if passed, then he can confirmed the message was came from you',

  Making_a_transfer: 'Making a transfer',
  Making_a_transfer_from_you__to_Bob: 'Making a transfer from you (Alice) to Bob:',
  It_works_as_follow: 'It works as follow:',
  Create_a_tx_with__: 'Create a transaction with your Alice\'s Public Key, Bob\'s wallet address and the amount',
  Hash_the_tx__: 'Hash the transaction, sign with your Alice\'s Private Key',
  Broadcast__the_tx: 'Broadcast (submit) the transaction',
  Miner_received_the_tx__: 'Miner received the transaction and signature',
  Miner_verify_the_signature__: 'Miner verify the signature with your Alice\'s Public Key',
  Miner_derive_your__address__: 'Miner derive your Alice\'s wallet address from your Alice\'s Public Key',
  Miner_check_your__balance: 'Miner check your Alice\'s balance',
  Decrease_your_balance__: 'Decrease your Alice\'s balance and add to Bob\'s wallet address',
  Miner_pack_the_tx__: 'Miner pack the transaction into a new block',
  Transfer_finished: 'Transfer finished',

  Wallet_Address: 'Wallet Address',
  Derived_from_the_Public_Key_with__: 'Derived from the Public Key with native checksum, for receiving funds.',
  Sending_a_Wallet_address_is_safe: 'Sending a Wallet address is safe.',

  If_you_miss_spelled: 'If you miss-spelled',
  recipient_s_wallet_address__: 'recipient\'s wallet address when making a transfer.',
  The_tx_would_fail__: 'The transaction would fail due to security reasons.',
  In_the_vision_network: 'In the vision network,',
  no_one_would_ever_loss_any_assets: 'no one would ever lose any assets',
  because_of_this: 'because of this.',
  You_can_explore: 'You can explore',
  VOKEN_wallet_address_Validator: 'VOKEN wallet address Validator',
  for_more_: 'for more...',

  Need_more_keypairs_wallets: 'Need more key-pairs/wallets?',
  More_keypairs_wallets_: 'More key-pairs/wallets...',
  Click_here_: 'Click here:',

  Derive_Next_Wallet: 'Derive Next Wallet',

  Address: 'Address',

  Private_Key_copied: 'Private Key: copied',
  Public_Key_copied: 'Public Key: copied',
  Wallet_Address_copied: 'Wallet Address: copied',
  Copy_failed: 'Copy failed',

  A_valid_VOKEN_wallet_address_is_: 'A valid VOKEN wallet address is:',
  Base32_encoded_: 'Base32 encoded, ',
  by: 'by',
  Starts_with_a_lowercase: 'Starts with a lowercase',
  _33_characters: '33 characters',
  Looks_like_: 'Looks like: ',
  VOKEN_wallet_address: 'Voken wallet address',
  Input_here_to_auto_verify_: 'Input here to auto verify...',

  Auto_Convert_: 'Auto Convert...',
  VOKEN_Address: 'VOKEN Address',
  VOKEN_Public_Key__: 'VOKEN Public Key (Base32 encoded with checksum)',
  All_items_on_this_page_are_secure__: 'All items on this page are secure and it is safe to send them to anyone.',
  Compressed_Public_Key_in_HEX: 'Compressed Public Key in HEX',
  Uncompressed_Public_Key_in_HEX: 'Uncompressed Public Key in HEX',

  You_should_always_keep_your_Private_Key_safe_: 'You should always keep your Private Key safe, ',

  VOKEN_Private_Key__: 'VOKEN Private Key (Base32 encoded with checksum)',
  Private_Key_in_HEX: 'Private Key in HEX',

  // Bind
  Set_Voken_Address: 'Set Voken Address',
  Generate_A_New_Voken_Address: 'Generate A New Voken Address',
  Generate_New_Address__Mnemonic: 'Generate New Voken Mnemonic/Address',

  Mnemonic__backup_phrase_: 'Mnemonic (backup phrase)',
  Visit__VOKEN_wallet_generator: 'Visit: VOKEN HD Wallet Generator',
}

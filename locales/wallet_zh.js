export default {
  Wallet: '钱包',

  HD_Wallets_helps__: '分层确定性钱包（简称 HD 钱包）可以帮助您使用一个助记词管理多个钱包，而无需存储或记忆多个私钥。',



  Mnemonic_Phrase: '助记短语',
  Human__readable_and_: '人性化阅读，易于记忆。',
  The_BIP39_Mnemonic_is: 'BIP39 助记词是',
  the_very_beginning: '最开始，',
  also_the_most_important_part:　'也是最重要的部分。',

  Generate_a_random_Mnemonic: '随机生成助记词',
  Input_mnemonic_manually: '手动输入助记词',

  Input_Your_Mnemonic_Manually: '手动输入您的助记词',
  Invalid_Mnemonic: '无效的助词词',
  Placeholder__textarea_mnemonic: '强度：12 / 15 / 18 / 21 / 24 字（含校验和）',

  BIP39_Mnemonic__backup_phrase_: 'BIP39 助记词（备份短语）',
  Generate_a_random_Mnemonic__renew_: '随机生成助记词（更新）',
  Here_is_a_example: '下面是一个例子：',

  It_is_the_root_of_your_wallets: '它是您钱包的根。',
  Never_never_never_disclose_: '绝不，绝不，绝不向任何人透露。',
  Please_write_the_mnemonic_: '请把助记词抄写在纸上，并确保放在安全的地方。',
  You_can_always_restore__: '您可以随时用这个助记词恢复您的所有钱包。',
  The_avatar: '头像',
  is_converted_from___mnemonic: '是由助记词的哈希值转换而来的。',
  An_image_may_easier__: '一张图片可能更容易打动您，所以请您尽量认识或保存它。',
  If_you_find___avatar_does_not__: '如果您在恢复钱包时发现头像不匹配，只是说明您输入的东西不对，仔细检查并修正错别字。',


  Master_Seed: '主种子',
  The_master_seed_is_converted__: '主种是由记号转换而来的（单方向）。',
  Same_as_your_mnemonic__never_disclose__: '和您的助记词一样，千万不要向任何人透露。',
  You_dont_need_to_save__SEED__: '您不需要保存或记住它。程序以后会用它来生成确定性钱包。',


  Deterministic_Wallets: '确定性钱包',
  Key_pair__can_be_derived_from__: '确定性钱包的密钥对（一个私钥和一个公钥）可以从主种子获得。',
  VOKEN_use_the_following_5_levels_in: 'VOKEN 使用以下 5 层深度的',
  path_as: '路径',
  which_is_registered_and_listed_in: '已注册并列入',
  you_could_find_the: '您可以找到',
  index_value_is: '索引值是',
  Wallets_OR_addresses_ar_numbered__: '钱包/地址从索引 0 开始依次递增编号。',
  Here_is_the_1st_wallet__contains: '这里是第一个钱包（#0，默认），它包含',
  a_private__public_key_pair: '一个私钥/公钥对',
  and: '和',
  an_address_: '一个地址：',

  It_was_derived_from_the__: '它来源于上边的主种子，按路径',
  its_values_were_Base32_encoded: '它的值是 Base32 编码的。',

  Private_Key: '私钥',
  You_should_always_keep_it_private_: '您应该始终保持它的私密性。',
  Never_disclose_it_to_anyone: '千万不要向任何人透露。',
  If_you_use_the_Proxy_clientbase_: '如果您在远景网络中使用 Proxy 客户端或 IM，就需要您的私钥。',

  Public_Key: '公钥',
  Derived_from__in_pairs: '源于私钥，与私钥成对工作。',
  Sending_a_Public_Key_is_safe: '发送公钥是安全的。',

  How_do_the__keypair_works: '私钥/公钥对是如何工作的？',
  Data_encrypted_with_public__: '用公钥加密的数据只能用相应的私钥来解密。',

  Accordingly__data_signed_by__: '相应地，用私钥签名的数据只能用相应的公钥来验证。',


  Only: '仅可',
  the_owner_holds_the_private_key_while__: '拥有者持有私钥，同时保持公钥',
  publicly_accessible: '公开可访问。',
  A_signature__: '签名：原始数据的哈希值，然后对哈希值进行加密。',

  A_private_public_keypair_could__: '私钥/公钥对可用于：',
  Encrypted_communication: '加密通信',
  Transactions: '交易',
  etc_: '等等',

  Receiving_a_message__: '接收信息/数据包',
  Just_suppose_you_are_Alice_and__: '假设您是爱丽丝，您的一个朋友是鲍勃。',
  Sending_and_receiving_a__: '信息/数据包的发送和接收简要介绍如下：',
  You_Alice_send__Bob: '您（Alice）给 Bob 发一条信息：',
  Encrypt_the_message_with_Bob__: '用 Bob 的公钥加密信息',
  Hash_the_message__sign_the_hash__: '对信息进行哈希处理，用您的 Alice 的私钥签署哈希值',
  Send_the_encrypted_message__your_Public__: '将加密的信息，您的公钥和签名发送给 Bob',
  Bob_received_your__: 'Bob 收到了您的加密信息和您的签名：',
  Decrypt__got_the_message: '用 Bob 的私钥解密信息，得到了信息',
  Verify_your_signature__: '用您 Alice 的公钥验证您的签名，如果通过了，他就可以确认信息是由您发出的',


  Making_a_transfer: '转账',
  Making_a_transfer_from_you__to_Bob: '从您（Alice）转给 Bob 鲍勃：',
  It_works_as_follow: '它的工作原理如下：',
  Create_a_tx_with__: '用您的 Alice 的公钥，Bob 的钱包地址和金额创建一个交易',
  Hash_the_tx__: '对交易进行哈希处理，用您 Alice 的私钥签名',
  Broadcast__the_tx: '广播（提交）交易',
  Miner_received_the_tx__: '矿工收到交易和签名',
  Miner_verify_the_signature__: '矿工用您 Alice 的公钥验证签名',
  Miner_derive_your__address__: '矿工从您 Alice 的公钥中获取 Alice 的钱包地址',
  Miner_check_your__balance: '矿工检查您 Alice 的余额',
  Decrease_your_balance__: '减少您 Alice 的余额，并添加到 Bob 的钱包地址',
  Miner_pack_the_tx__: '矿工将交易打包进一个新的区块',
  Transfer_finished: '转账完成',

  Wallet_Address: '钱包地址',
  Derived_from_the_Public_Key_with__: '由公钥得出，带原生校验，用于接收资金。',
  Sending_a_Wallet_address_is_safe: '发送钱包地址是安全的。',

  If_you_miss_spelled: '如果您拼错了',
  recipient_s_wallet_address__: '收款人的钱包地址，在转账时。',
  The_tx_would_fail__: '由于安全原因，交易会失败。',
  In_the_vision_network: '在远景网络中，',
  no_one_would_ever_loss_any_assets: '没有人会丢失资产',
  because_of_this: '因为这个。',
  You_can_explore: '您可以探索',
  VOKEN_wallet_address_Validator: 'VOKEN 钱包地址验证器',
  for_more_: '了解更多...',

  Need_more_keypairs_wallets: '需要更多钥匙对/钱包？',
  More_keypairs_wallets_: '更多的钥匙对/钱包...',
  Click_here_: '点击这里：',

  Derive_Next_Wallet: '衍生出下一个钱包',

  Address: '地址',

  Private_Key_copied: '私钥：已复制',
  Public_Key_copied: '公钥：已复制',
  Wallet_Address_copied: '钱包地址：已复制',
  Copy_failed: '复制失败',

  A_valid_VOKEN_wallet_address_is_: '一个有效的 VOKEN 钱包地址是：',
  Base32_encoded_: 'Base32 编码，',
  by: '由',
  Starts_with_a_lowercase: '开头为一个小写字母',
  _33_characters: '33 个字符',
  Looks_like_: '看起来像：',
  VOKEN_wallet_address: 'Voken 钱包地址',
  Input_here_to_auto_verify_: '在这里输入，自动验证...',

  Auto_Convert_: '自动转换...',
  VOKEN_Address: 'VOKEN 地址',
  VOKEN_Public_Key__: 'VOKEN 公钥（Base32 编码，含校验和）',
  All_items_on_this_page_are_secure__: '本页面上的所有项目都是安全的，发送给任何人都是安全的。',
  Compressed_Public_Key_in_HEX: '已压缩的十六进制公钥',
  Uncompressed_Public_Key_in_HEX: '未压缩的十六进制公钥',

  You_should_always_keep_your_Private_Key_safe_: '您应该时刻保管好您的私钥，',

  VOKEN_Private_Key__: 'VOKEN 私钥（Base32 编码，含校验和）',
  Private_Key_in_HEX: '十六进制私钥',

  // Bind
  Set_Voken_Address: '设置 Voken 地址',
  Generate_A_New_Voken_Address: '生成一个新的 Voken 地址',
  Generate_New_Address__Mnemonic: '生成新的助记词/地址',

  Mnemonic__backup_phrase_: '助记词（备份短语）',
  Visit__VOKEN_wallet_generator: '访问：VOKEN HD 钱包生成器',

}
